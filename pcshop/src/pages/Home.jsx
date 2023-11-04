import { NavBar } from "../components/NavBar";
import { SubNavBar } from "../components/SubNavBar";

export const Home = ({ categorias, subcategorias }) => {

    return (
        <header className="header_wrap">
            <NavBar />
            {/* if ({ loc } == 'root') { <SubNavBar /> } */}
            {/* {loc == 'root' ? <SubNavBar /> : null} */}
            <SubNavBar categorias={categorias} subcategorias={subcategorias} />
        </header>
    )
};
