import { useContext, useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';

const Navbar = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(cartItems);
    }, [cartItems]);

    let qty = cartItems.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

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
            <div className="preloader">
                <div className="lds-ellipsis">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <header className="header_wrap fixed-top">
                <div className="bottom_header dark_skin main_menu_uppercase">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="/">
                                <img className="logo_light" src="/src/assets/images/logo_light_a.png" alt="logo" />
                                <img className="logo_dark" src="/src/assets/images/logo_dark_a.png" alt="logo" />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-expanded="false">
                                <span className="ion-android-menu"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li>
                                        <NavLink
                                            to={{ pathname: '/' }}
                                            className={({ isActive }) => (isActive ? 'nav-link nav_item active' : 'nav-link nav_item')}>
                                            Inicio
                                        </NavLink>
                                    </li>
                                    <li className="dropdown">
                                        {/* <a className="dropdown-toggle nav-link" href="/category" data-toggle="dropdown">
                                            Categor&iacute;as
                                        </a> */}
                                        <NavLink
                                            to="/category"
                                            className={({ isActive }) => (isActive ? 'dropdown-toggle nav-link active' : 'dropdown-toggle nav-link')}
                                            data-toggle="dropdown">
                                            Categor&iacute;as
                                        </NavLink>
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li>
                                                    <NavLink
                                                        to="/category/jw4pk8Xa2qEn8lvXMhHT"
                                                        className={({ isActive }) =>
                                                            isActive ? 'dropdown-item nav-link nav_item active' : 'dropdown-item nav-link nav_item'
                                                        }>
                                                        Laptops
                                                    </NavLink>
                                                    {/* <a className="dropdown-item nav-link nav_item" href="/category/1">
                                                        Laptops
                                                    </a> */}
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/category/9YyML7TYCSY0bReYeHDb"
                                                        className={({ isActive }) =>
                                                            isActive ? 'dropdown-item nav-link nav_item active' : 'dropdown-item nav-link nav_item'
                                                        }>
                                                        Smartphones
                                                    </NavLink>
                                                    {/* <a className="dropdown-item nav-link nav_item" href="/category/2">
                                                        Smartphones
                                                    </a> */}
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/category/N44JMqrcCm9zPxKz2YzW"
                                                        className={({ isActive }) =>
                                                            isActive ? 'dropdown-item nav-link nav_item active' : 'dropdown-item nav-link nav_item'
                                                        }>
                                                        Accesorios
                                                    </NavLink>
                                                    {/* <a className="dropdown-item nav-link nav_item" href="/category/4">
                                                        Accesorios
                                                    </a> */}
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/category/ZKqN0TkcHRKgloUH9aJ7"
                                                        className={({ isActive }) =>
                                                            isActive ? 'dropdown-item nav-link nav_item active' : 'dropdown-item nav-link nav_item'
                                                        }>
                                                        Tablets
                                                    </NavLink>
                                                    {/* <a className="dropdown-item nav-link nav_item" href="/category/3">
                                                        Tablets
                                                    </a> */}
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="nav-link nav_item" href="#">
                                            Cont&aacute;ctenos
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link nav_item" href="#">
                                            Usuario
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ul className="navbar-nav attr-nav align-items-center header_list">
                                <li>
                                    <a href="#" className="nav-link search_trigger">
                                        <i className="linearicons-magnifier"></i>
                                    </a>
                                    <div className="search_wrap">
                                        <span className="close-search">
                                            <i className="ion-ios-close-empty"></i>
                                        </span>
                                        <form>
                                            <input type="text" placeholder="Buscar" className="form-control" id="search_input" />
                                            <button type="submit" className="search_icon">
                                                <i className="ion-ios-search-strong"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="search_overlay"></div>
                                </li>
                                <li className="dropdown cart_dropdown">
                                    <a className="nav-link cart_trigger" href="#" data-toggle="dropdown">
                                        <i className="linearicons-cart"></i>
                                        <span className="cart_count">{qty}</span>
                                    </a>
                                    <div className="cart_box dropdown-menu dropdown-menu-right">
                                        <ul className="cart_list">
                                            {items.map((item) => (
                                                <li key={item.id}>
                                                    <a href={`/item/${item.id}`}>
                                                        <img src={`../../src/assets/images/products/${item.img1}`} alt="cart_thumb1" />
                                                        {item.name}
                                                    </a>
                                                    <span className="cart_quantity">
                                                        {item.quantity} x{' '}
                                                        <span className="cart_amount">
                                                            {' '}
                                                            <span className="price_symbole">$</span>
                                                        </span>
                                                        {setPrice(item.normalPrice, item.discount)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="cart_footer">
                                            <p className="cart_total">
                                                <strong>Subtotal:</strong>{' '}
                                                <span className="cart_price">
                                                    {' '}
                                                    <span className="price_symbole">$</span>
                                                </span>
                                                {formatToCurrency(getCartTotal())}
                                            </p>
                                            <p className="cart_buttons">
                                                <a href="/cart" className="btn btn-fill-line view-cart">
                                                    Ver Carrito
                                                </a>
                                                {/* <a href="#" className="btn btn-fill-out checkout">
                                                    Comprar
                                                </a> */}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
