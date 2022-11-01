import { db, auth } from '../firebase'
import { collection, onSnapshot, deleteDoc, doc, addDoc, where, query } from "firebase/firestore";
import { ref } from 'vue';

const usePins = () => {
    const pins = ref([]);
    const pinsDataRef = collection(db, "homedivpins");
    const pinsDataQueryRef = query(pinsDataRef, where("author", "==", auth.currentUser.uid));

    const getPinsData = () => {
        onSnapshot(pinsDataQueryRef, (snapshot) => {
            pins.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })
    }

    const deletePins = () => {
        pins.value.forEach(async (pin) => {
            if (pin.author === auth.currentUser.uid) {
                await deleteDoc(doc(pinsDataRef, pin.id));
            }
        });
    }

    const addPin = async (x, y) => {
        if (x && y) {
            await addDoc(pinsDataRef, {
                xPosition: x,
                yPosition: y,
                author: auth.currentUser.uid
            })
        }
    }

    return {
        pins,
        getPinsData,
        deletePins,
        addPin

    }
}
export default usePins