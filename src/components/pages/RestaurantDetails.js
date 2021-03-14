import {useEffect, useState} from "react";
import RestaurantAddress from "../fragments/address/RestaurantAddress";
import {Container} from "@material-ui/core";

const styles = {
    img: {
        maxWidth: '400px',
        maxLength: '300px'
    }
}

export default function RestaurantDetails({match}) {

    useEffect(() => {
        fetchRestaurant();
    }, []);

    const [restaurant, setRestaurant] = useState({})
    const [address, setAddress] = useState({})

    const fetchRestaurant = async () => {
        const response = await fetch(`http://localhost:8080/api/v1/restaurants/${match.params.restaurantId}`);
        const item = await response.json();
        setRestaurant(item)
        setAddress(item.address)
    };

    return (<Container maxWidth="xl">
        <h1>{restaurant.name}</h1>
        <img style={styles.img} src={restaurant["imageUrl"]} alt="restaurantFrontImage"/>
        <Container maxWidth='sm'>
            <p>{restaurant.description}</p>
        </Container>
        <RestaurantAddress streetName={address.streetName}
                           streetNumber={address.streetNumber}
                           city={address.city}
                           floor={address['floor']}
                           country={address.country}
        />
    </Container>);

}
