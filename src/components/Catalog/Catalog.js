import React, { useEffect, useState } from 'react';
import House from '../House/House';
import './Catalog.css'

const Catalog = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch('./houselist.JSON')
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [])

    return (
        <div className="catalog-container">
            <div className="house-container">
                {
                    houses.map(house => <House
                        key={house._id}
                        house={house}>
                    </House>)
                }
            </div>
            <div className="cart-deatails">
                <h2>Total Added</h2>
            </div>
        </div>
    );
};

export default Catalog;