import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

export default function Cart() {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

    function formatToCurrency(amount) {
        return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
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
                <div className="section">
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
                                            {cartItems.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="product-thumbnail">
                                                        <a href="#">
                                                            <img src={`../../src/assets/images/products/${item.img1}`} alt="product1" />
                                                        </a>
                                                    </td>
                                                    <td className="product-name" data-title="Product">
                                                        <a href="#">{item.name}</a>
                                                    </td>
                                                    <td className="product-price" data-title="Price">
                                                        $
                                                        {formatToCurrency(
                                                            item.discount == 0 ? item.normalPrice : (item.discount / 100 + 1) * item.normalPrice
                                                        )}
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
                                                        $
                                                        {formatToCurrency(
                                                            item.discount == 0
                                                                ? item.normalPrice * item.quantity
                                                                : (item.discount / 100 + 1) * item.normalPrice * item.quantity
                                                        )}
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
                            {/* <div className="col-md-6">
                                <div className="heading_s1 mb-3">
                                    <h6>Calculate Shipping</h6>
                                </div>
                                <form className="field_form shipping_calculator">
                                    <div className="form-row">
                                        <div className="form-group col-lg-12">
                                            <div className="custom_select">
                                                <select className="form-control">
                                                    <option value="">Choose a option...</option>
                                                    <option value="AX">Aland Islands</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AD">Andorra</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarctica</option>
                                                    <option value="AG">Antigua and Barbuda</option>
                                                    <option value="AR">Argentina</option>
                                                    <option value="AM">Armenia</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-lg-6">
                                            <input
                                                required="required"
                                                placeholder="State / Country"
                                                className="form-control"
                                                name="name"
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input
                                                required="required"
                                                placeholder="PostCode / ZIP"
                                                className="form-control"
                                                name="name"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-lg-12">
                                            <button className="btn btn-fill-line" type="submit">
                                                Update Totals
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
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
