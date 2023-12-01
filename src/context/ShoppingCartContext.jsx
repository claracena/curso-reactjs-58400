import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    const [itemQtyInCart, setItemQtyInCart] = useState(1);

    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? {
                              ...cartItem,
                              quantity: cartItem.stock > cartItem.quantity ? cartItem.quantity + 1 : (cartItem.quantity = cartItem.quantity),
                          }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const addToCartQty = (item, qty) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? // ? {
                          //     ...cartItem,
                          //     quantity: cartItem.stock > cartItem.quantity + qty ? cartItem.quantity + qty : (cartItem.quantity = cartItem.quantity),
                          // }
                          {
                              ...cartItem,
                              quantity: cartItem.stock >= qty ? qty : (cartItem.quantity = cartItem.quantity),
                          }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: qty }]);
        }
    };

    const completelyRemoveFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        }
    };

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
            setCartItems(cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)));
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce(
            (total, item) =>
                total + (item.discount == 0 ? item.normalPrice * item.quantity : (1 - item.discount / 100) * item.normalPrice * item.quantity),
            0
        );
    };

    const getItemInCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setItemQtyInCart(isItemInCart.quantity);
        } else {
            setItemQtyInCart(0);
        }

        // console.log(itemQtyInCart);
        return itemQtyInCart;
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                addToCartQty,
                removeFromCart,
                completelyRemoveFromCart,
                clearCart,
                getCartTotal,
                getItemInCart,
                // getCartQty,
            }}>
            {children}
        </CartContext.Provider>
    );
};
