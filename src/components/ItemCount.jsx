import { useState } from 'react';

export const ItemCount = ({ prodid, stock }) => {
    const [count, setCount] = useState(1);

    const decrement = () => {
        count > 1 ? setCount((count) => count - 1) : count;
    };

    const increment = () => {
        count < stock ? setCount((count) => count + 1) : count;
    };

    return (
        <div className="cart_extra">
            <div className="cart-product-quantity">
                <div className="quantity">
                    <input type="button" onClick={decrement} value="-" className="minus" />
                    <input type="text" name="quantity" value={count} title="Qty" className="qty" size="4" readOnly />
                    <input type="button" onClick={increment} value="+" className="plus" />
                </div>
            </div>
            <div className="cart_btn">
                <button className="btn btn-fill-out btn-addtocart" type="button">
                    <i className="icon-basket-loaded"></i> Agregar al carrito
                </button>
                <a className="add_wishlist" href="#">
                    <i className="icon-heart"></i>
                </a>
            </div>
        </div>
    );
};
