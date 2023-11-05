import Brand from "./Brand"
import CartWidget from "./CartWidget"
import Menu from "./Menu"

export const SecondNavBar = ({ categorias }) => {
  return (
    <div className="bottom_header dark_skin main_menu_uppercase">
    	<div className="container">
            <nav className="navbar navbar-expand-lg"> 
                <Brand />
                <Menu categorias={categorias} />
            </nav>
        </div>
    </div>
  )
}
