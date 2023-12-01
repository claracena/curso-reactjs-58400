import { useContext, useEffect, useState, useRef } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

export const ItemCount = ({ prodInfo }) => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, addToCartQty, getItemInCart, completelyRemoveFromCart } =
        useContext(CartContext);
    const itemCount = useRef(1);
    const [itemQty, setItemQty] = useState(0);
    const [valChanged, setValChanged] = useState(0);

    useEffect(() => {
        if (valChanged == 0) {
            itemCount.current = getItemInCart(prodInfo);
            setItemQty(itemCount.current);
        }
    });

    function addOneToCart() {
        if (itemQty + 1 <= prodInfo.stock) {
            setValChanged(1);
            setItemQty(itemQty + 1);
        }
    }

    function substractOneToCart() {
        if (itemQty > 0) {
            setValChanged(1);
            setItemQty(itemQty - 1);
        }
    }

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

    return (
        <div className="cart_extra">
            <div className="cart_btn">
                {/* <button onClick={addAndRedirect} className="btn btn-fill-out btn-addtocart" type="button">
                    <i className="icon-basket-loaded"></i> Agregar al carrito
                </button> */}
                <div className="cart_extra">
                    <div className="cart-product-quantity">
                        <div className="quantity">
                            <input
                                type="button"
                                onClick={() => {
                                    substractOneToCart();
                                }}
                                defaultValue="-"
                                className="minus"
                            />
                            <input
                                type="text"
                                name="quantity"
                                value={itemQty}
                                // defaultValue={itemQty}
                                title="Qty"
                                className="qty"
                                size="4"
                                readOnly
                            />
                            <input
                                type="button"
                                onClick={() => {
                                    addOneToCart();
                                }}
                                defaultValue="+"
                                className="plus"
                            />
                        </div>
                    </div>
                    <div className="cart_btn">
                        <button
                            className="btn btn-fill-out btn-addtocart"
                            type="button"
                            onClick={() => {
                                itemQty == 0 ? completelyRemoveFromCart(prodInfo) : addToCartQty(prodInfo, itemQty);
                            }}>
                            {/* <button className="btn btn-fill-out btn-addtocart" type="button"> */}
                            <i className="icon-basket-loaded"></i> Add to cart
                        </button>
                        {/* <a className="add_compare" href="#">
                            <i className="icon-shuffle"></i>
                        </a> */}
                        <a className="add_wishlist" href="#">
                            <i className="icon-heart"></i>
                        </a>
                    </div>
                </div>
                {/* <a className="add_wishlist" href="#">
                    <i className="icon-heart"></i>
                </a> */}
            </div>
        </div>
    );
};
