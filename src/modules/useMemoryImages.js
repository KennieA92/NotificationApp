import { auth, db } from '../firebase'
import { collection, onSnapshot, addDoc, deleteDoc, doc, where, query } from "firebase/firestore";
import useMemoryStorage from './useMemoryStorage';
import { ref } from 'vue';

const useMemoryImages = () => {
    const memoryImages = ref([]);
    const memoryImagesDataRef = collection(db, "memoryimages");
    // Query used to check if the Image was uploaded by the current user.
    // If it was, then it will be returned when getMemoryImages is called.
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
        // Check if memoryImage is not null
        // This means that the user has finished uploading an image.
        if (memoryImage) {
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
