import { auth, db, storage } from '../firebase'
import { collection, onSnapshot, addDoc, deleteDoc, doc, where, query } from "firebase/firestore";
import { ref as firebaseRef, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { ref } from 'vue';

const useMapImages = () => {
    const mapImages = ref([]);
    const addImageData = ref([]);
    const mapImagesDataRef = collection(db, "mapimages");
    const mapImagesDataQueryRef = query(mapImagesDataRef, where("author", "==", auth.currentUser.uid));


    const uploadFile = async (e) => {
        // Check if the user is authenticated, 
        // with nav guards this should not be nescessary
        // but it is a good practice to check if the user is authenticated.
        if (auth.currentUser) {
            // Get the file from the event
            const file = e.target.files[0];
            // Create a storage ref
            const storageRef = firebaseRef(storage, 'mapImages/' + file.name);
            // Create an upload task
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    // Upload completed successfully, now we can get the download URL          
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        // Add the image to the database using the addMemoryImage function
                        // from the useMemoryImages module
                        addImageData.value.url = downloadURL;
                    });
                }
            );
        }
    }

    const deleteFile = async (memoryImage) => {
        const fileRef = ref(storage, memoryImage.url);
        deleteObject(fileRef).then(() => {
            console.log('File deleted successfully');
        }).catch(() => {
            console.log("No file to delete");
        });
    }


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



    const addMapImage = async () => {
        if (addImageData.value) {
            await addDoc(mapImagesDataRef, {
                name: addImageData.value.name,
                author: auth.currentUser.uid,
                url: addImageData.value.url
            }).then(() => {
                addImageData.value = ref([])
            })
        }
    }

    return {
        mapImages,
        addImageData,
        uploadFile,
        deleteFile,
        getMapImages,
        deleteMapImages,
        addMapImage

    }
}
export default useMapImages 
