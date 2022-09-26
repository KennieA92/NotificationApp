import { db } from '../firebase'
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { ref } from 'vue';

const useRestaurants = () => {
    const restaurants = ref([]);

    //Make sure that only public restaurants are shown.
    const restaurantDataRef = query(collection(db, "Restaurant"), where("visibility", "==", "public"));
    //const restaurantDataRef = collection(db, "Restaurant");

    const getRestaurantsData = async () => {
        try {
            onSnapshot(restaurantDataRef, (snapshot) => {
                restaurants.value = snapshot.docs.map(doc => {
                    // console.log("is it reaching this step")
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
            })
        } catch (err) {
            console.log(err.message);
        }
    }




    return {
        restaurants,
        getRestaurantsData
    }
}

export default useRestaurants