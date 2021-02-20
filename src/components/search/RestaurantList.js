import {React} from "react"
import RestaurantItem from "./RestaurantItem";

const containerStyle = {
    marginTop: '20px'
}

function RestaurantList(props) {
    return (
        <div name='restaurant-container'
             style={containerStyle}>
            {props.restaurants.map((restaurant, index) => {
                return <RestaurantItem
                    name={restaurant.name}
                    index={index}
                    key={restaurant.id}
                />
            })}
        </div>
    )
}

export default RestaurantList
