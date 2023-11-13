import { NavBar } from "../components/NavBar";
import { SubNavBar } from "../components/SubNavBar";

export const Home = ({ categorias }) => {

    return (
        <header className="header_wrap">
            <NavBar categorias={categorias} />
            <SubNavBar categorias={categorias} />
        </header>
    )
};
