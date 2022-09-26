import { db, auth } from '../firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { ref } from 'vue';

const useRoles = () => {
    const roles = ref([]);
    let rolesDataRef = ref(null);
    //Make sure that only public restaurants are shown.
    // const restaurantDataRef = query(collection(db, "Restaurant"), where("visibility", "==", "public"));
    if (auth.currentUser) {
        rolesDataRef = query(collection(db, "Roles"), where("author", "==", auth.currentUser.uid));

        //const restaurantDataRef = collection(db, "Restaurant");
    }

    const getAdminData = async () => {
        if (auth.currentUser) {
            onSnapshot(rolesDataRef, (snapshot) => {
                roles.value = snapshot.docs.map(doc => {
                    // console.log("is it reaching this step")
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
            })
        } else {
            console.log("No user is logged in");
        }
    }

    const isAdmin = () => {
        if (roles.value.length > 0) {
            return true
        } else {
            return false
        }
    }


    return {
        isAdmin,
        getAdminData
    }
}

export default useRoles