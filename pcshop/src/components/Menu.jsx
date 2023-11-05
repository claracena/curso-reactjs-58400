import { NavLink, useParams } from 'react-router-dom';

export default function Menu({ categorias }) {
    const { catSeo } = useParams();
    return (
        <>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false">
                <span className="ion-android-menu"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li>
                        <NavLink to={{ pathname: '/' }} className={({ isActive }) => (isActive ? 'nav-link nav_item active' : 'nav-link nav_item')}>
                            Inicio
                        </NavLink>
                    </li>
                    <li className="dropdown">
                        <NavLink
                            to="/category"
                            className={({ isActive }) => (isActive ? 'dropdown-toggle nav-link active' : 'dropdown-toggle nav-link')}
                            data-toggle="dropdown">
                            Categor&iacute;as
                        </NavLink>
                        <div className="dropdown-menu">
                            <ul>
                                {categorias.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={`/category/${item.catSeo}`}
                                                className={({ isActive }) =>
                                                    isActive ? 'dropdown-item nav-link nav_item active' : 'dropdown-item nav-link nav_item'
                                                }>
                                                {item.catName}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink
                            to={`/who-we-are`}
                            className={({ isActive }) =>
                                isActive ? 'nav-link nav_item active' : 'nav-link nav_item'
                            }>
                            Quienes Somos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/contact-us`}
                            className={({ isActive }) =>
                                isActive ? 'nav-link nav_item active' : 'nav-link nav_item'
                            }>
                            Cont&aacute;ctenos
                        </NavLink>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav attr-nav align-items-center">
                <li>
                    <a href="#" className="nav-link">
                        <i className="linearicons-user"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link search_trigger">
                        <i className="linearicons-magnifier"></i>
                    </a>
                    <div className="search_wrap">
                        <span className="close-search">
                            <i className="ion-ios-close-empty"></i>
                        </span>
                        <form>
                            <input type="text" placeholder="Search" className="form-control" id="search_input" />
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
                                    <img src="../src/assets/images/cart_thamb1.jpg" alt="cart_thumb1" />
                                    Variable product 001
                                </a>
                                <span className="cart_quantity">
                                    {' '}
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
                                    <img src="../src/assets/images/cart_thamb2.jpg" alt="cart_thumb2" />
                                    Ornare sed consequat
                                </a>
                                <span className="cart_quantity">
                                    {' '}
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
        </>
    );
}
