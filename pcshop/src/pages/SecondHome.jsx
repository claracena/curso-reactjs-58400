import { SecondNavBar } from "../components/SecondNavBar";
import { SubNavBar } from "../components/SubNavBar";

export const SecondHome = ({ loc }) => {
    return (
        <header className="header_wrap">
            <SecondNavBar />
            {/* if ({ loc } == 'root') { <SubNavBar /> } */}
            {/* {loc == 'root' ? <SubNavBar /> : null} */}
            {/* <SubNavBar /> */}
        </header>
    )
};
