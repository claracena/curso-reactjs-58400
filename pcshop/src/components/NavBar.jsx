import Brand from "./Brand"
import CartWidget from "./CartWidget"
import MainMenuSearch from "./MainMenuSearch"

export const NavBar = () => {
  return (
    <div className="middle-header dark_skin">
        <div className="custom-container">
            <div className="nav_block">
                <Brand />
                <MainMenuSearch />
                <CartWidget />
            </div>
        </div>
    </div>
  )
}
