import React, {useEffect} from "react";
import './App.css';
import Search from "./components/search/Search";
import RestaurantList from "./components/search/RestaurantList";

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
            <RestaurantList restaurants={restaurants}/>
        </div>
    );
}

export default App;
