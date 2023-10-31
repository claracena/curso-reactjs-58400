export const SubNavBar = () => {
    return (
        <div className="bottom_header dark_skin main_menu_uppercase border-top border-bottom">
            <div className="custom-container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-3">
                        <div className="categories_wrap">
                            <button
                                type="button"
                                data-toggle="collapse"
                                data-target="#navCatContent"
                                aria-expanded="false"
                                className="categories_btn">
                                <i className="linearicons-disc"></i>
                                <span>Categor&iacute;as </span>
                            </button>
                            <div id="navCatContent" className="nav_cat navbar collapse">
                                <ul>
                                    <li className="dropdown dropdown-mega-menu">
                                        <a className="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown">
                                            <i className="flaticon-tv"></i> <span>Computadoras</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <ul className="mega-menu d-lg-flex grey-border-custom">
                                                <li className="mega-menu-col col-lg-7">
                                                    <ul className="d-lg-flex">
                                                        <li className="mega-menu-col col-lg-6">
                                                            <ul>
                                                                <li className="dropdown-header">Gamer PCs</li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        HP OMEN
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Alienware
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        ASUS
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        CORSAIR
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        MSI
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Lenovo
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Acer
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        LG
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-6">
                                                            <ul>
                                                                <li className="dropdown-header">Port&aacute;tiles</li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Alienware
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Dell
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        ASUS
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        MSI
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Lenovo
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Apple
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Razer
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Acer
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-5">
                                                    <div className="header-banner2">
                                                        <img src="https://picsum.photos/id/366/370/200?blur=2" alt="menu_banner1" />
                                                        {/* <img src="./src/assets/images/menu_banner1.jpg" alt="menu_banner1" /> */}
                                                        <div className="banne_info white-content">
                                                            <h6>10% Descuento</h6>
                                                            <h4>Nuevos Modelos</h4>
                                                            <a href="#">Comprar Ahora</a>
                                                        </div>
                                                    </div>
                                                    <div className="header-banner2">
                                                        <img src="https://picsum.photos/id/0/370/200?blur=2" alt="menu_banner2" />
                                                        <div className="banne_info white-content">
                                                            <h6>15% Descuento</h6>
                                                            <h4>En Laptops Seleccionadas</h4>
                                                            <a href="#">Comprar Ahora</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-mega-menu">
                                        <a className="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown">
                                            <i className="flaticon-responsive"></i> <span>Celulares & Tablets</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <ul className="mega-menu d-lg-flex grey-border-custom">
                                                <li className="mega-menu-col col-lg-7">
                                                    <ul className="d-lg-flex">
                                                        <li className="mega-menu-col col-lg-6">
                                                            <ul>
                                                                <li className="dropdown-header">Celulares</li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Apple
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Samsung
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Google Pixel
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Motorola
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Huawei
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Nokia
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Sony
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-6">
                                                            <ul>
                                                                <li className="dropdown-header">Tablets</li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Apple
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Samsung
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        LG
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Microsoft
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Asus
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Acer
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="#">
                                                                        Wacom
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-5">
                                                    <div className="header-banner2">
                                                        <img src="https://picsum.photos/id/160/310/300?blur=2" alt="menu_banner1" />
                                                        {/* <img src="./src/assets/images/menu_banner1.jpg" alt="menu_banner1" /> */}
                                                        <div className="banne_info white-content">
                                                            <h6>10% Descuento</h6>
                                                            <h4>Nuevos Modelos</h4>
                                                            <a href="#">Comprar Ahora</a>
                                                        </div>
                                                    </div>
                                                    {/* <div className="header-banner2">
                                                    <a href="#"><img src="https://picsum.photos/id/160/310/300" alt="menu_banner5" /></a>
                                                </div> */}
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-mega-menu">
                                        <a className="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown">
                                            <i className="flaticon-mouse"></i> <span>Componentes</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <ul className="mega-menu d-lg-flex grey-border-custom">
                                                <li className="mega-menu-col col-lg-4">
                                                    <ul>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Motherboards
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Procesadores
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Memoria RAM
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Discos R&iacute;gidos
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-4">
                                                    <ul>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Discos S&oacute;lidos
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Discos m.2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Placas de Video
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Gabinetes
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-4">
                                                    <ul>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Fuentes
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Teclados
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Mouse
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Monitores
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    {/* <li className="dropdown dropdown-mega-menu">
                                        <a className="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown">
                                            <i className="flaticon-headphones"></i> <span>Accessorios</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <ul className="mega-menu d-lg-flex grey-border-custom">
                                                <li className="mega-menu-col col-lg-4">
                                                    <ul>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Auriculares
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Mouse Pads
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-4">
                                                    <ul>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Hubs
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Impresoras
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-4">
                                                    <ul>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                RGB
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="#">
                                                                Cables
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li> */}
                                    <li>
                                        <a className="dropdown-item nav-link nav_item" href="#">
                                            <i className="flaticon-headphones"></i> <span>Auriculares</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item nav-link nav_item" href="#">
                                        <i className="linearicons-mouse"></i> <span>Mouse Pads</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item nav-link nav_item" href="#">
                                            <i className="linearicons-spotlights"></i> <span>Iluminaci&oacute;n</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item nav-link nav_item" href="#">
                                            <i className="flaticon-printer"></i> <span>Impresoras</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item nav-link nav_item" href="#">
                                            <i className="linearicons-network"></i> <span>Conectividad</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-6 col-9">
                        <nav className="navbar navbar-expand-lg">
                            <button
                                className="navbar-toggler side_navbar_toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSidetoggle"
                                aria-expanded="false">
                                <span className="ion-android-menu"></span>
                            </button>
                            <div className="pr_search_icon">
                                <a href="#" className="nav-link pr_search_trigger">
                                    <i className="linearicons-magnifier"></i>
                                </a>
                            </div>
                            <div className="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
                                <ul className="navbar-nav">
                                    <li>
                                        <a className="nav-link nav_item active" href="#">
                                            Inicio
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">
                                            Pages
                                        </a>
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li>
                                                    <a className="dropdown-item nav-link nav_item" href="about.html">
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item nav-link nav_item" href="contact.html">
                                                        Contact Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item nav-link nav_item" href="faq.html">
                                                        Faq
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item nav-link nav_item" href="404.html">
                                                        404 Error Page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item nav-link nav_item" href="login.html">
                                                        Login
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item nav-link nav_item" href="signup.html">
                                                        Register
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item nav-link nav_item" href="term-condition.html">
                                                        Terms and Conditions
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-mega-menu">
                                        <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">
                                            Products
                                        </a>
                                        <div className="dropdown-menu">
                                            <ul className="mega-menu d-lg-flex">
                                                <li className="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li className="dropdown-header">Woman's</li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="shop-three-columns.html">
                                                                Vestibulum sed
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="shop-four-columns.html">
                                                                Donec porttitor
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="shop-grid-view.html">
                                                                Donec vitae facilisis
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="shop-list-view.html">
                                                                Curabitur tempus
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">
                                                                Vivamus in tortor
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li className="dropdown-header">Men's</li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="shop-cart.html">
                                                                Donec vitae ante ante
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="checkout.html">
                                                                Etiam ac rutrum
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="wishlist.html">
                                                                Quisque condimentum
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="compare.html">
                                                                Curabitur laoreet
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="cart-empty.html">
                                                                Vivamus in tortor
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li className="dropdown-header">Kid's</li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">
                                                                Donec vitae facilisis
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item nav-link nav_item"
                                                                href="shop-product-detail-left-sidebar.html">
                                                                Quisque condimentum
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item nav-link nav_item"
                                                                href="shop-product-detail-right-sidebar.html">
                                                                Etiam ac rutrum
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item nav-link nav_item"
                                                                href="shop-product-detail-thumbnails-left.html">
                                                                Donec vitae ante ante
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item nav-link nav_item"
                                                                href="shop-product-detail-accordion-style.html">
                                                                Donec porttitor
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-3">
                                                    <ul>
                                                        <li className="dropdown-header">Accessories</li>
                                                        <li>
                                                            <a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">
                                                                Curabitur tempus
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item nav-link nav_item"
                                                                href="shop-product-detail-left-sidebar.html">
                                                                Quisque condimentum
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item nav-link nav_item"
                                                                href="shop-product-detail-right-sidebar.html">
                                                                Vivamus in tortor
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item nav-link nav_item"
                                                                href="shop-product-detail-thumbnails-left.html">
                                                                Donec vitae facilisis
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item nav-link nav_item"
                                                                href="shop-product-detail-accordion-style.html">
                                                                Donec porttitor
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="d-lg-flex menu_banners">
                                                <div className="col-lg-6">
                                                    <div className="header-banner">
                                                        <div className="sale-banner">
                                                            <a className="hover_effect1" href="#">
                                                                <img src="./src/assets/images/shop_banner_img7.jpg" alt="shop_banner_img7" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="header-banner">
                                                        <div className="sale-banner">
                                                            <a className="hover_effect1" href="#">
                                                                <img src="./src/assets/images/shop_banner_img8.jpg" alt="shop_banner_img8" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">
                                            Blog
                                        </a>
                                        <div className="dropdown-menu dropdown-reverse">
                                            <ul>
                                                <li>
                                                    <a className="dropdown-item menu-link dropdown-toggler" href="#">
                                                        Grids
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <ul>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-three-columns.html">
                                                                    3 columns
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-four-columns.html">
                                                                    4 columns
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-left-sidebar.html">
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-right-sidebar.html">
                                                                    right Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-standard-left-sidebar.html">
                                                                    Standard Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item nav-link nav_item"
                                                                    href="blog-standard-right-sidebar.html">
                                                                    Standard right Sidebar
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item menu-link dropdown-toggler" href="#">
                                                        Masonry
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <ul>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-masonry-three-columns.html">
                                                                    3 columns
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-masonry-four-columns.html">
                                                                    4 columns
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-masonry-left-sidebar.html">
                                                                    Left Sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-masonry-right-sidebar.html">
                                                                    right Sidebar
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item menu-link dropdown-toggler" href="#">
                                                        Single Post
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <ul>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-single.html">
                                                                    Default
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-single-left-sidebar.html">
                                                                    left sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-single-slider.html">
                                                                    slider post
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-single-video.html">
                                                                    video post
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-single-audio.html">
                                                                    audio post
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item menu-link dropdown-toggler" href="#">
                                                        List
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <ul>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-list-left-sidebar.html">
                                                                    left sidebar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item nav-link nav_item" href="blog-list-right-sidebar.html">
                                                                    right sidebar
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown dropdown-mega-menu">
                                        <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">
                                            Shop
                                        </a>
                                        <div className="dropdown-menu">
                                            <ul className="mega-menu d-lg-flex">
                                                <li className="mega-menu-col col-lg-9">
                                                    <ul className="d-lg-flex">
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Shop Page Layout</li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="shop-list.html">
                                                                        shop List view
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">
                                                                        shop List Left Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item nav-link nav_item"
                                                                        href="shop-list-right-sidebar.html">
                                                                        shop List Right Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">
                                                                        Left Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="shop-right-sidebar.html">
                                                                        Right Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="shop-load-more.html">
                                                                        Shop Load More
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Other Pages</li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="shop-cart.html">
                                                                        Cart
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="checkout.html">
                                                                        Checkout
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="wishlist.html">
                                                                        Wishlist
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="compare.html">
                                                                        compare
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="order-completed.html">
                                                                        Order Completed
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Product Pages</li>
                                                                <li>
                                                                    <a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">
                                                                        Default
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item nav-link nav_item"
                                                                        href="shop-product-detail-left-sidebar.html">
                                                                        Left Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item nav-link nav_item"
                                                                        href="shop-product-detail-right-sidebar.html">
                                                                        Right Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item nav-link nav_item"
                                                                        href="shop-product-detail-thumbnails-left.html">
                                                                        Thumbnails Left
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-col col-lg-3">
                                                    <div className="header_banner">
                                                        <div className="header_banner_content">
                                                            <div className="shop_banner">
                                                                <div className="banner_img overlay_bg_40">
                                                                    <img src="./src/assets/images/shop_banner.jpg" alt="shop_banner" />
                                                                </div>
                                                                <div className="shop_bn_content">
                                                                    <h5 className="text-uppercase shop_subtitle">New Collection</h5>
                                                                    <h3 className="text-uppercase shop_title">Sale 30% Off</h3>
                                                                    <a href="#" className="btn btn-white rounded-0 btn-sm text-uppercase">
                                                                        Shop Now
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="nav-link nav_item" href="contact.html">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact_phone contact_support">
                                <i className="linearicons-phone-wave"></i>
                                <span>123-456-7689</span>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
