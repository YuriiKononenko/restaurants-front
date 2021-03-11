import Grid from "@material-ui/core/Grid";
import RestaurantItem from "../search/RestaurantItem";
import React, {useEffect} from "react";

function Home(props) {

    const [restaurants, setRestaurants] = React.useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/restaurants')
            .then(response => response.json())
            .then(restaurants => {
                setRestaurants(restaurants)
            })
            .catch((e) => console.log(e))
    }, [])


    return (
        <Grid container justify="flex-start" spacing={10} style={{padding: '24px'}}>
        {restaurants.map(restaurant =>
            <Grid key={restaurant.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                {restaurant.name.includes(props.filter) &&
                <RestaurantItem restaurant={restaurant}/>}
            </Grid>
        )}
    </Grid>)
}

export default Home;
