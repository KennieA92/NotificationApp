import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import useMemoryImages from '@/modules/useMemoryImages'
import { auth, storage } from '../firebase'

const useMemoryStorage = () => {
  const uploadFile = async (e) => {
    if (auth.currentUser) {
      const { addMemoryImage } = useMemoryImages();
      const file = e.target.files[0];
      const storageRef = ref(storage, 'memoryImages/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

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
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
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