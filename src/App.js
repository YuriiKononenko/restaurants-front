import React, {useEffect} from "react";
import './App.css';
import Search from "./components/search/Search";
import Grid from '@material-ui/core/Grid';
import {GridList} from "@material-ui/core";
import RestaurantItem from "./components/search/RestaurantItem";

function App() {
    const [restaurants, setRestaurants] = React.useState([])
    useEffect(() => {
        fetch('http://localhost:8080/api/v1/restaurants')
            .then(response => response.json())
            .then(restaurants => {
                setRestaurants(restaurants)
            })
    }, [])

    return (
        <div className="App">
            <h1>Restaurant Service</h1>
            <Search/>
            <Grid container spacing={10} style={{padding: '24px'}}>
                {restaurants.map(restaurant =>
                    <Grid key={restaurant.id * 42} item xs={12} sm={6} md={4} lg={4} xl={3}>
                        <RestaurantItem
                            key={restaurant.id * 42}
                            name={restaurant.name}
                            imageUrl={restaurant.imageUrl}
                            description={restaurant.description}>
                        </RestaurantItem>
                    </Grid>
                )}

            </Grid>
        </div>
    );
}

export default App;
