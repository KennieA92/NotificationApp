import { db, auth } from '../firebase'
import { collection, onSnapshot, addDoc, deleteDoc, updateDoc, doc, where, query } from "firebase/firestore";
import { ref } from 'vue';

const useMapPins = () => {
    const mapPins = ref([]);
    const pinsDataRef = collection(db, "mappins");

    const getMapPinsData = (mapPin) => {
        // Compound query to check if the pin was uploaded by the current user
        // to make sure that we get all pins related to this map.
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
        })
    }

    const deleteMapPin = async (mapPin) => {
        if (mapPin.author === auth.currentUser.uid) {
            await deleteDoc(doc(pinsDataRef, mapPin.id));
        }
    }

    const editMapPin = async (mapPin) => {
        await updateDoc(doc(pinsDataRef, mapPin.id), {
            name: mapPin.name,
            location: mapPin.location,
            description: mapPin.description,
            notes: mapPin.notes

        });
    };

    return {
        mapPins,
        getMapPinsData,
        addMapPin,
        deleteMapPin,
        editMapPin

    }
}
export default useMapPins