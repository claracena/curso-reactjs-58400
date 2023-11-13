import { SecondNavBar } from "../components/SecondNavBar";
import { SubNavBar } from "../components/SubNavBar";

export const SecondHome = ({ categorias }) => {
    return (
        <header className="header_wrap">
            <SecondNavBar categorias={categorias} />
        </header>
    )
};
