import React, {useEffect, useState} from "react";
import './App.css';
import Search from "./components/search/Search";
import Grid from '@material-ui/core/Grid';
import {Container, GridList} from "@material-ui/core";
import RestaurantItem from "./components/search/RestaurantItem";

function App() {
    const [restaurants, setRestaurants] = React.useState([])
    const [filter, setFilter] = useState('')

    const handleSearchChange = (typeEvent) => {
        setFilter(typeEvent.target.value);
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/restaurants')
            .then(response => response.json())
            .then(restaurants => {
                setRestaurants(restaurants)
            })
            .catch((e) => console.log(e))
    }, [])

    function getRestaurantItem(restaurant) {
        return <RestaurantItem
            key={restaurant.id}
            name={restaurant.name}
            imageUrl={restaurant.imageUrl}
            description={restaurant.description}>
        </RestaurantItem>;
    }

    return (
        <div className="App">
            <h1>Restaurant Booking Service</h1>
            <Search onChange={handleSearchChange}/>
            <Grid container justify="flex-start" spacing={10} style={{padding: '24px'}}>
                {restaurants.map(restaurant =>
                    <Grid key={restaurant.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                        {restaurant.name.includes(filter) && getRestaurantItem(restaurant)}
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default App;
