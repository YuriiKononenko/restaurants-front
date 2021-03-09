import React, {useEffect, useState} from "react";
import './App.css';
import Search from "./components/search/Search";
import Grid from '@material-ui/core/Grid';
import {Container, GridList} from "@material-ui/core";
import RestaurantItem from "./components/search/RestaurantItem";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import RestaurantDetails from "./components/pages/RestaurantDetails";

function App() {
    const [filter, setFilter] = useState('')

    const handleSearchChange = (typeEvent) => {
        setFilter(typeEvent.target.value);
    }


    const home = () => <Home filter={filter}/>;
    return (
        <div className="App">
            <h1>Restaurant Booking Service</h1>
            <Search onChange={handleSearchChange}/>
            <Router>
                <Switch>
                    <Route path="/" exact component={home}/>
                    <Route path="/details" component={RestaurantDetails}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
