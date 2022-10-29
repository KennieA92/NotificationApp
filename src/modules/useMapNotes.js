import { db, auth } from '../firebase'
import { collection, onSnapshot, deleteDoc, doc, addDoc, where, query } from "firebase/firestore";
import { ref } from 'vue';

const useMapNotes = () => {
    const mapNotes = ref([]);
    const mapNotesDataRef = collection(db, "mapnotes");



    const getMapNotesData = (mapPin) => {
        const pinsDataQueryRef = query(mapNotesDataRef, where("author", "==", auth.currentUser.uid), where("pinid", "==", mapPin.value.id));
        onSnapshot(pinsDataQueryRef, (snapshot) => {
            mapNotes.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })
    }
    const deleteMapNote = async (mapNote) => {
        if (mapNotes.value.author === auth.currentUser.uid) {
            await deleteDoc(doc(mapNotesDataRef, mapNote.id));
        }
    }



    const addMapNote = async (mapNote) => {
        await addDoc(mapNotesDataRef, {
            pinId: mapNote,
            author: auth.currentUser.uid
        })
    }

    return {
        mapNotes,
        getMapNotesData,
        deleteMapNote,
        addMapNote

    }
}
export default useMapNotes