import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import useMemoryImages from '@/modules/useMemoryImages'
import { auth, storage } from '../firebase'

const useMemoryStorage = () => {

  const uploadFile = async (e) => {
    // Check if the user is authenticated, 
    // with nav guards this should not be nescessary
    // but it is a good practice to check if the user is authenticated.
    if (auth.currentUser) {
      const { addMemoryImage } = useMemoryImages();
      // Get the file from the event
      const file = e.target.files[0];
      // Create a storage ref
      const storageRef = ref(storage, 'memoryImages/' + file.name);
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
            addMemoryImage(downloadURL);
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


  return {
    uploadFile,
    deleteFile
  }
}
export default useMemoryStorage