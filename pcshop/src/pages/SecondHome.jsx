import { SecondNavBar } from "../components/SecondNavBar";
import { SubNavBar } from "../components/SubNavBar";

export const SecondHome = ({ categorias, subcategorias }) => {
    return (
        <header className="header_wrap">
            <SecondNavBar categorias={categorias} subcategorias={subcategorias} />
        </header>
    )
};
