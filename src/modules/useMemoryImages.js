import { auth, db } from '../firebase'
import { collection, onSnapshot, addDoc, deleteDoc, doc, where, query } from "firebase/firestore";
import useMemoryStorage from './useMemoryStorage';
import { ref } from 'vue';

const useMemoryImages = () => {
    const memoryImages = ref([]);
    const memoryImagesDataRef = collection(db, "memoryimages");
    const memoryImagesDataQueryRef = query(memoryImagesDataRef, where("author", "==", auth.currentUser.uid));
    const { deleteFile } = useMemoryStorage();

    const getMemoryImages = () => {
        onSnapshot(memoryImagesDataQueryRef, (snapshot) => {
            memoryImages.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
        })

    }
    const deleteMemoryImages = async () => {
        memoryImages.value.forEach((image) => {
            deleteFile(image).then(async () => {
                await deleteDoc(doc(memoryImagesDataRef, image.id))
            });
        })
    }



    const addMemoryImage = async (memoryImage) => {
        if (memoryImage) {
            debugger;
            await addDoc(memoryImagesDataRef, {
                author: auth.currentUser.uid,
                url: memoryImage
            })
        }
    }

    return {
        memoryImages,
        getMemoryImages,
        deleteMemoryImages,
        addMemoryImage

    }
}
export default useMemoryImages 
