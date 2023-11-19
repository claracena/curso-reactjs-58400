import { NavLink, useParams } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
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
                                                        to="/category/1"
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
                                                        to="/category/2"
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
                                                        to="/category/3"
                                                        className={({ isActive }) =>
                                                            isActive ? 'dropdown-item nav-link nav_item active' : 'dropdown-item nav-link nav_item'
                                                        }>
                                                        Tablets
                                                    </NavLink>
                                                    {/* <a className="dropdown-item nav-link nav_item" href="/category/3">
                                                        Tablets
                                                    </a> */}
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/category/4"
                                                        className={({ isActive }) =>
                                                            isActive ? 'dropdown-item nav-link nav_item active' : 'dropdown-item nav-link nav_item'
                                                        }>
                                                        Accesorios
                                                    </NavLink>
                                                    {/* <a className="dropdown-item nav-link nav_item" href="/category/4">
                                                        Accesorios
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
                                        <span className="cart_count">2</span>
                                    </a>
                                    <div className="cart_box dropdown-menu dropdown-menu-right">
                                        <ul className="cart_list">
                                            <li>
                                                <a href="#" className="item_remove">
                                                    <i className="ion-close"></i>
                                                </a>
                                                <a href="#">
                                                    <img src="/src/assets/images/cart_thamb1.jpg" alt="cart_thumb1" />
                                                    Variable product 001
                                                </a>
                                                <span className="cart_quantity">
                                                    1 x{' '}
                                                    <span className="cart_amount">
                                                        {' '}
                                                        <span className="price_symbole">$</span>
                                                    </span>
                                                    78.00
                                                </span>
                                            </li>
                                            <li>
                                                <a href="#" className="item_remove">
                                                    <i className="ion-close"></i>
                                                </a>
                                                <a href="#">
                                                    <img src="/src/assets/images/cart_thamb2.jpg" alt="cart_thumb2" />
                                                    Ornare sed consequat
                                                </a>
                                                <span className="cart_quantity">
                                                    1 x{' '}
                                                    <span className="cart_amount">
                                                        {' '}
                                                        <span className="price_symbole">$</span>
                                                    </span>
                                                    81.00
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="cart_footer">
                                            <p className="cart_total">
                                                <strong>Subtotal:</strong>{' '}
                                                <span className="cart_price">
                                                    {' '}
                                                    <span className="price_symbole">$</span>
                                                </span>
                                                159.00
                                            </p>
                                            <p className="cart_buttons">
                                                <a href="#" className="btn btn-fill-line view-cart">
                                                    Ver Carrito
                                                </a>
                                                <a href="#" className="btn btn-fill-out checkout">
                                                    Comprar
                                                </a>
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
