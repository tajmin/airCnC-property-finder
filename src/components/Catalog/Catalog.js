import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import House from '../House/House';
import './Catalog.css'

const Catalog = () => {
    const [houses, setHouses] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('./houselist.JSON')
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [])

    const handleAddToCart = house => {
        if (!cart.find(item => item._id === house._id)) {
            const newItem = [...cart, house];
            setCart(newItem);
        }
    }

    return (
        <div className="catalog-container">
            <div className="house-container">
                {
                    houses.map(house => <House
                        key={house._id}
                        house={house}
                        handleAddToCart={handleAddToCart}>
                    </House>)
                }
            </div>
            <div className="cart-deatails">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Catalog;