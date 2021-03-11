import {useEffect, useState} from "react";

export default function RestaurantDetails({match}) {

    useEffect(() => {
        fetchRestaurant();
    }, []);

    const [restaurant, setRestaurant] = useState({})
    const fetchRestaurant = async () => {
        const response = await fetch(`http://localhost:8080/api/v1/restaurants/${match.params.restaurantId}`);
        const item = await response.json();
        setRestaurant(item)
    };

    console.log(restaurant)



    return (<div>
        <h1>{restaurant.name}</h1>
        <img src={restaurant["imageUrl"]} alt="hello"/>
        <h1>{restaurant.description}</h1>
        <p>Address: {restaurant.address && restaurant.address.streetName}</p>
    </div>);

}
