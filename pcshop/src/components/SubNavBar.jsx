import { NavLink, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export const SubNavBar = ({ categorias }) => {
    const { catSeo } = useParams();

    function link_with_sub(catIndex, catId, catSeo, catIcon, catName) {

        let subCat = categorias.filter(cat => cat.catId == catId);
        subCat = subCat[0]['catChildren'];

        return (
            
            <li className="dropdown dropdown-mega-menu" data-toggle="dropdown" key={catIndex}>
                <a className="dropdown-item nav-link dropdown-toggler" href={`/category/${catSeo}`}>
                    <i className={catIcon}></i> <span>{catName}</span>
                </a>
                <div className="dropdown-menu" style={{minWidth: '250px'}}>
                    <ul className="mega-menu d-lg-flex grey-border-custom">
                        <li className="mega-menu-col col-lg-12">
                            <ul>
                            {subCat.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link className="dropdown-item nav-link nav_item" to={`/category/${item.subCatSeo}`}>
                                            {item.subCatName}
                                        </Link>
                                    </li>
                                )
                            })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
        )
    }

    function link_no_sub(catIndex, catSeo, catIcon, catName) {
        return (
            <li key={catIndex}>
                <Link className="dropdown-item nav-link nav_item" to={`/category/${catSeo}`}>
                    <i className={catIcon}></i> <span>{catName}</span>
                </Link>
            </li>
        )
    }

    return (
        <div className="bottom_header dark_skin main_menu_uppercase border-top border-bottom">
            <div className="container">
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
                                    {categorias.map((item, index) => {
                                        return (
                                            item.catHasChild ? link_with_sub(index, item.catId, item.catSeo, item.catIcon, item.catName) : link_no_sub(index, item.catSeo, item.catIcon, item.catName)
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-6 col-9">
                        <nav className="navbar navbar-expand-lg">
                            {/* TODO desde aca hasta la linea 142 se puede compactar con lo de Menu.jsx y separar como componenete */}
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
