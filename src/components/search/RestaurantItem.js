import React, {useContext} from 'react'

const style = {

    display: 'flex',
    listStyleType: 'none',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'

}

function RestaurantItem({name, index}) {
    const classes = []

    return (
        <div>
            <span style={style} className={classes.join(' ')}>
                <strong>{index + 1}</strong>
                &nbsp;
                {name}
            </span>
        </div>
    )
}

export default RestaurantItem
