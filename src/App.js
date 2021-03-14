import React, {useState} from "react";
import './App.css';
import Search from "./components/fragments/search/Search";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Home from "./components/pages/Home";
import RestaurantDetails from "./components/pages/RestaurantDetails";
import {Box} from "@material-ui/core";

function App() {
    const [filter, setFilter] = useState('')

    const handleSearchChange = (typeEvent) => {
        setFilter(typeEvent.target.value);
    }

    const homeComponent = () => <Home filter={filter}/>;
    const homePagePath = '/';
    return (
        <div className="App">
            <Box component="h1" m={1} onClick={() => window.location.href = homePagePath}>
                Restaurant Booking Service
            </Box>
            <Search onChange={handleSearchChange}/>
            <Router>
                <Switch>
                    <Route path={homePagePath} exact component={homeComponent}/>
                    <Route path="/details/:restaurantId" component={RestaurantDetails}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
