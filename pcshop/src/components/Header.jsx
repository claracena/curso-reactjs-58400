import { NavBar } from "./NavBar";
import { SubNavBar } from "./SubNavBar";

export const Header = () => {
    return (
        <header className="header_wrap">
            <NavBar />
            <SubNavBar />
        </header>
    )
};
