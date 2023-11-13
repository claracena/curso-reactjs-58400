import { SecondNavBar } from "../components/SecondNavBar";

export const SecondHome = ({ categorias }) => {
    return (
        <header className="header_wrap">
            <SecondNavBar categorias={categorias} />
        </header>
    )
};
