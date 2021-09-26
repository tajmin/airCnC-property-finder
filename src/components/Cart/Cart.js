import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    const totalReducer = (previous, house) => previous + house.price;
    const totalPrice = cart.reduce(totalReducer, 0);

    return (
        <div className="cart-container">
            <div className="cart">
                <h2>Total Cost: ${totalPrice.toLocaleString()}</h2>
                <h3>Properties Added To Cart:  {cart.length}</h3>
                {cart.map(house => <h4 key={house._id}>{house.address}</h4>)}
            </div>
        </div>
    );
};

export default Cart;