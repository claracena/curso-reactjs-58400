import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

export default function Cart() {
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

    return (
        <>
            <main>
                <div className="breadcrumb_section bg_gray page-title-mini">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="page-title">
                                    <h1>Carrito</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ol className="breadcrumb justify-content-md-end">
                                    <li className="breadcrumb-item">
                                        <a href="/">Inicio</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <a href="/cart">Carrito</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section custom-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive shop_cart_table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">&nbsp;</th>
                                                <th className="product-name">Producto</th>
                                                <th className="product-price">Precio</th>
                                                <th className="product-quantity">Cantidad</th>
                                                <th className="product-subtotal">Total</th>
                                                {/* <th className="product-remove">Remover</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {console.log(cartItems)} */}
                                            {cartItems.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="product-thumbnail">
                                                        <a href={`/item/${item.id}`}>
                                                            <img src={`../../src/assets/images/products/${item.img1}`} alt="product1" />
                                                        </a>
                                                    </td>
                                                    <td className="product-name" data-title="Product">
                                                        <a href={`/item/${item.id}`}>{item.name}</a>
                                                    </td>
                                                    <td className="product-price" data-title="Price">
                                                        ${setPrice(item.normalPrice, item.discount, 1)}
                                                    </td>
                                                    <td className="product-quantity" data-title="Quantity">
                                                        <div className="quantity">
                                                            <input
                                                                type="button"
                                                                onClick={() => {
                                                                    removeFromCart(item);
                                                                }}
                                                                value="-"
                                                                className="minus"
                                                            />
                                                            <input
                                                                type="text"
                                                                name="quantity"
                                                                value={item.quantity}
                                                                title="Qty"
                                                                className="qty"
                                                                size="4"
                                                                readOnly
                                                            />
                                                            <input
                                                                type="button"
                                                                onClick={() => {
                                                                    addToCart(item);
                                                                }}
                                                                value="+"
                                                                className="plus"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal" data-title="Total">
                                                        ${setPrice(item.normalPrice, item.discount, item.quantity)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="4" className="px-0">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-md-12 text-left text-md-right">
                                                            <button
                                                                className="btn btn-line-fill btn-sm"
                                                                onClick={() => {
                                                                    clearCart();
                                                                }}
                                                                type="submit">
                                                                Vaciar Carrito
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td colSpan="8" className="px-0">
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-md-12 text-left text-md-right">
                                                            <button className="btn btn-line-fill btn-sm" type="submit">
                                                                Update Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="medium_divider"></div>
                                <div className="divider center_icon">
                                    <i className="ti-shopping-cart-full"></i>
                                </div>
                                <div className="medium_divider"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="border p-3 p-md-4">
                                    <div className="heading_s1 mb-3">
                                        <h6>Cart Totals</h6>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td className="cart_total_label">Sub-Total</td>
                                                    <td className="cart_total_amount">${formatToCurrency(getCartTotal())}</td>
                                                </tr>
                                                <tr>
                                                    <td className="cart_total_label">Env&iacute;o</td>
                                                    <td className="cart_total_amount">Gratis!</td>
                                                </tr>
                                                <tr>
                                                    <td className="cart_total_label">Total</td>
                                                    <td className="cart_total_amount">
                                                        <strong>${formatToCurrency(getCartTotal())}</strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <a href="#" className="btn btn-fill-out">
                                        Finalizar Compra
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
