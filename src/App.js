import React, {useState} from "react";
import './App.css';
import Search from "./components/search/Search";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import RestaurantDetails from "./components/pages/RestaurantDetails";

function App() {
    const [filter, setFilter] = useState('')

    const handleSearchChange = (typeEvent) => {
        setFilter(typeEvent.target.value);
    }

    const homeComponent = () => <Home filter={filter}/>;
    return (
        <div className="App">
            <h1>Restaurant Booking Service</h1>
            <Search onChange={handleSearchChange}/>
            <Router>
                <Switch>
                    <Route path="/" exact component={homeComponent}/>
                    <Route path="/details/:restaurantId" component={RestaurantDetails}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
