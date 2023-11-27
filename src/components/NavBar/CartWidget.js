// CartWidget.js
import React from 'react';
import CartIcon from './CartIcon'; // Ajusta la ruta según tu estructura

const CartWidget = () => {
    const itemCount = 5; // Número hardcodeado para demostración

    return (
        <div className="cart-widget">
            <CartIcon />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartWidget;