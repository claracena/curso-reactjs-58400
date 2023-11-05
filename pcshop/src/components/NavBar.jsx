import Brand from "./Brand"
import CartWidget from "./CartWidget"
import MainMenuSearch from "./MainMenuSearch"

export const NavBar = ({ categorias }) => {
  return (
    <div className="middle-header dark_skin">
        <div className="container">
            <div className="nav_block">
                <Brand />
                <MainMenuSearch categorias={categorias} />
                <CartWidget />
            </div>
        </div>
    </div>
  )
}
