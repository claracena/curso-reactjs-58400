import { useContext, useState } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const { cartItems, clearCart, getCartTotal } = useContext(CartContext);
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');

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

    const db = getFirestore();

    let prodList = {};
    let myTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let n = i + 1;
        prodList['item_' + n] = {
            prodId: cartItems[i].id,
            name: cartItems[i].name,
            price: setPrice(cartItems[i].normalPrice, cartItems[i].discount),
            qty: cartItems[i].quantity,
        };
        myTotal = myTotal + setPrice(cartItems[i].normalPrice, cartItems[i].discount) * cartItems[i].quantity;
    }

    let navigate = useNavigate();

    const redirect = (code) => {
        let path = `/checkout/${code}`;
        navigate(path);
    };

    const finalize = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'purchases'), {
                userId: 1,
                dateTime: new Date().getTime(),
                name: fname,
                email: email,
                items: prodList,
                total: myTotal,
            });
            if (docRef.id) {
                clearCart();
                redirect(docRef.id);
            }
        } catch (e) {
            console.error('Error al agregar el documento: ', e);
        }
    };

    return (
        <>
            <main>
                <div className="breadcrumb_section bg_gray page-title-mini">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="page-title">
                                    <h1>Checkout</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ol className="breadcrumb justify-content-md-end">
                                    <li className="breadcrumb-item">
                                        <a href="/">Inicio</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="/cart">Carrito</a>
                                    </li>
                                    <li className="breadcrumb-item active">Checkout</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section custom-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="toggle_info">
                                    <span>
                                        <i className="fas fa-user"></i>Ya tiene cuenta?{' '}
                                        <a href="#loginform" data-toggle="collapse" className="collapsed" aria-expanded="false">
                                            Inicie su sesi&oacute;n aqu&iacute;
                                        </a>
                                    </span>
                                </div>
                                <div className="panel-collapse collapse login_form" id="loginform">
                                    <div className="panel-body">
                                        <p>
                                            Si ya ha realizado compras en este sitio, por favor ingrese sus datos de login. De lo contrario
                                            contin&uacute;e al formulario de datos de facturaci&oacute;n y env&iacute;o
                                        </p>
                                        <form method="post">
                                            <div className="form-group">
                                                <input type="text" required="" className="form-control" name="email" placeholder="Usuario o Email" />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    required=""
                                                    type="password"
                                                    name="password"
                                                    placeholder="Contrase&ntilde;a"
                                                />
                                            </div>
                                            <div className="login_footer form-group">
                                                <div className="chek-form">
                                                    <div className="custome-checkbox">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="checkbox"
                                                            id="remember"
                                                            defaultValue=""
                                                        />
                                                        <label className="form-check-label" htmlFor="remember">
                                                            <span>Recordarme</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <a href="#">Olvid&oacute; su contrase&ntilde;a?</a>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-fill-out btn-block" name="login">
                                                    Ingresar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="toggle_info">
                                    <span>
                                        <i className="fas fa-tag"></i>Tiene un cup&oacute;n?{' '}
                                        <a href="#coupon" data-toggle="collapse" className="collapsed" aria-expanded="false">
                                            Ingrese el c&oacute;digo aqu&iacute;
                                        </a>
                                    </span>
                                </div>
                                <div className="panel-collapse collapse coupon_form" id="coupon">
                                    <div className="panel-body">
                                        <p>Si tiene un cup&oacute;n de descuento, por favor ingr&eacute;selo en el siguiente campo.</p>
                                        <div className="coupon field_form input-group">
                                            <input type="text" defaultValue="" className="form-control" placeholder="Ingrese su cup&oacute;n.." />
                                            <div className="input-group-append">
                                                <button className="btn btn-fill-out btn-sm" type="submit">
                                                    Aplicar Cup&oacute;n
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="medium_divider"></div>
                                <div className="divider center_icon">
                                    <i className="linearicons-credit-card"></i>
                                </div>
                                <div className="medium_divider"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="heading_s1">
                                    <h4>Detalles de Env&iacute;o</h4>
                                </div>
                                <form method="post">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            name="fname"
                                            value={fname}
                                            onChange={(e) => setFname(e.target.value)}
                                            placeholder="Nombre (no obligatorio)"
                                        />
                                    </div>
                                    {/* <div className="form-group">
                                        <input type="text" required className="form-control" name="lname" placeholder="Apellido *" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="billing_address" required="" placeholder="Dirección *" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="billing_address2"
                                            required=""
                                            placeholder="Dirección (cont.)"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" required type="text" name="city" placeholder="Ciudad *" />
                                    </div>
                                    <div className="form-group">
                                        <div className="custom_select">
                                            <select className="form-control">
                                                <option defaultValue="">Provincia...</option>
                                                <option defaultValue="BUE">Buenos Aires</option>
                                                <option defaultValue="CABA">Ciudad Autónoma de Buenos Aires</option>
                                                <option defaultValue="CAT">Catamarca</option>
                                                <option defaultValue="CHA">Chaco</option>
                                                <option defaultValue="CHU">Chubut</option>
                                                <option defaultValue="CBA">Córdoba</option>
                                                <option defaultValue="CORR">Corrientes</option>
                                                <option defaultValue="ENRI">Entre Ríos</option>
                                                <option defaultValue="FOR">Formosa</option>
                                                <option defaultValue="JUY">Jujuy</option>
                                                <option defaultValue="LAPAM">La Pampa</option>
                                                <option defaultValue="LARIO">La Rioja</option>
                                                <option defaultValue="MEN">Mendoza</option>
                                                <option defaultValue="MIS">Misiones</option>
                                                <option defaultValue="NQN">Neuquén</option>
                                                <option defaultValue="RN">Río Negro</option>
                                                <option defaultValue="SA">Salta</option>
                                                <option defaultValue="SJ">San Juan</option>
                                                <option defaultValue="SL">San Luis</option>
                                                <option defaultValue="SC">Santa Cruz</option>
                                                <option defaultValue="SF">Santa Fe</option>
                                                <option defaultValue="SDE">Santiago del Estero</option>
                                                <option defaultValue="TF">Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
                                                <option defaultValue="TUC">Tucumán</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="country"
                                            required=""
                                            placeholder="Argentina"
                                            defaultValue="Argentina"
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" required type="text" name="zipcode" placeholder="Cód. Postal *" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" required type="text" name="phone" placeholder="Teléfono *" />
                                    </div> */}
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            required
                                            type="text"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email (no obligatorio)"
                                        />
                                    </div>
                                    {/* <div className="form-group">
                                        <div className="chek-form">
                                            <div className="custome-checkbox">
                                                <span>Ingrese una contrase&ntilde;a para asociar a su nueva cuenta</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group create-account" id="a1">
                                        <input className="form-control" required type="password" placeholder="Contraseña" name="password" />
                                    </div>
                                    <div className="heading_s1">
                                        <h4>Notas</h4>
                                    </div>
                                    <div className="form-group mb-0">
                                        <textarea
                                            rows="5"
                                            className="form-control"
                                            placeholder="Agregue cualquier nota que considere necesaria"></textarea>
                                    </div> */}
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="order_review">
                                    <div className="heading_s1">
                                        <h4>Su pedido</h4>
                                    </div>
                                    <div className="table-responsive order_table">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Producto</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            {item.name} <span className="product-qty">x {item.quantity}</span>
                                                        </td>
                                                        <td>${setPrice(item.normalPrice, item.discount, item.quantity)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>SubTotal</th>
                                                    <td className="product-subtotal">${formatToCurrency(getCartTotal())}</td>
                                                </tr>
                                                <tr>
                                                    <th>Env&iacute;o</th>
                                                    <td>Gratis!</td>
                                                </tr>
                                                <tr>
                                                    <th>Total</th>
                                                    <td className="product-subtotal">${formatToCurrency(getCartTotal())}</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div className="payment_method">
                                        <div className="heading_s1">
                                            <h4>Forma de Pago</h4>
                                        </div>
                                        <div className="payment_option">
                                            <div className="custome-radio">
                                                <input
                                                    className="form-check-input"
                                                    required=""
                                                    type="radio"
                                                    name="payment_option"
                                                    id="exampleRadios3"
                                                    defaultValue="option3"
                                                    defaultChecked=""
                                                />
                                                <label className="form-check-label" htmlFor="exampleRadios3">
                                                    Tarjeta de Cr&eacute;dito <small>VISA, Mastercard y Naranja en 1 pago</small>
                                                </label>
                                            </div>
                                            <div className="custome-radio">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="payment_option"
                                                    id="exampleRadios4"
                                                    defaultValue="option4"
                                                />
                                                <label className="form-check-label" htmlFor="exampleRadios4">
                                                    Transferencia bancaria
                                                </label>
                                            </div>
                                            <div className="custome-radio">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="payment_option"
                                                    id="exampleRadios5"
                                                    defaultValue="option5"
                                                />
                                                <label className="form-check-label" htmlFor="exampleRadios5">
                                                    Mercado Pago
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        onClick={finalize}
                                        className="btn btn-fill-out btn-block"
                                        style={{ pointerEvents: Object.keys(cartItems).length == 0 ? 'none' : 'auto' }}>
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
