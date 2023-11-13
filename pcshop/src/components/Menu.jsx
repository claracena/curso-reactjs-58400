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
        </>
    );
}
