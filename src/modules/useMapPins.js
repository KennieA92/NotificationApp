import { db, auth } from '../firebase'
import { collection, onSnapshot, addDoc, where, query } from "firebase/firestore";
import { ref } from 'vue';
import useMapNotes from '@/modules/useMapNotes';

const useMapPins = () => {
    const mapPins = ref([]);
    const pinsDataRef = collection(db, "mappins");
    const { addMapNote } = useMapNotes();



    const getMapPinsData = (mapPin) => {
        const pinsDataQueryRef = query(pinsDataRef, where("author", "==", auth.currentUser.uid), where("mapid", "==", mapPin.value.id));
        onSnapshot(pinsDataQueryRef, (snapshot) => {
            mapPins.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })
    }


    const addMapPin = async (mapPin) => {
        await addDoc(pinsDataRef, {
            xPosition: mapPin.value.xPosition,
            yPosition: mapPin.value.yPosition,
            mapid: mapPin.value.id,
            author: auth.currentUser.uid
        }).then((docRef) => {
            addMapNote(docRef.id);
        })
    }

    return {
        mapPins,
        getMapPinsData,
        addMapPin

    }
}
export default useMapPins