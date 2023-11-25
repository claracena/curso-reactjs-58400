import { useContext, useState } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';

export const ItemCount = ({ prodInfo }) => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

    function formatToCurrency(amount) {
        return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    function setPrice(price, pct, qty = 1) {
        if (pct <= 0) {
            return formatToCurrency(price * qty);
        } else {
            const percentage = (1 - pct / 100) * qty;
            return formatToCurrency(price * percentage);
        }
    }

    let navigate = useNavigate();
    const addAndRedirect = () => {
        addToCart(prodInfo);
        let path = `/cart`;
        navigate(path);
    };

    return (
        <div className="cart_extra">
            <div className="cart_btn">
                <button onClick={addAndRedirect} className="btn btn-fill-out btn-addtocart" type="button">
                    <i className="icon-basket-loaded"></i> Agregar al carrito
                </button>
                <a className="add_wishlist" href="#">
                    <i className="icon-heart"></i>
                </a>
            </div>
        </div>
    );
};
