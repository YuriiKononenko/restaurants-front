export default function RestaurantAddress(props) {

    const {streetName, streetNumber, floor, city, country} = props;

    const displayedFloor = floor == 1 ? '' : `, floor ${floor}`;

    return (<div>
        <h2>Address:</h2>
        <p id='address'>{`${streetName}, ${streetNumber}${displayedFloor}`}</p>
        <p id='city'>{`${city}, ${country}`} </p>
    </div>);

}
