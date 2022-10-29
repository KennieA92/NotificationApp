import { auth, db } from '../firebase'
import { collection, onSnapshot, addDoc, deleteDoc, doc, where, query } from "firebase/firestore";
import useMapStorage from './useMapStorage';
import { ref } from 'vue';

const useMapImages = () => {
    const mapImages = ref([]);
    const mapImagesDataRef = collection(db, "mapimages");
    const mapImagesDataQueryRef = query(mapImagesDataRef, where("author", "==", auth.currentUser.uid));
    const { deleteFile } = useMapStorage();

    const getMapImages = () => {
        onSnapshot(mapImagesDataQueryRef, (snapshot) => {
            mapImages.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })

    }
    const deleteMapImages = async () => {
        mapImages.value.forEach((image) => {
            deleteFile(image).then(async () => {
                await deleteDoc(doc(mapImagesDataRef, image.id))
            });
        })
    }



    const addMapImage = async (mapImages) => {
        if (mapImages) {
            debugger;
            await addDoc(mapImagesDataRef, {
                author: auth.currentUser.uid,
                url: mapImages
            })
        }
    }

    return {
        mapImages,
        getMapImages,
        deleteMapImages,
        addMapImage

    }
}
export default useMapImages 
