export default function CartWidget() {
  return (
    <ul className="navbar-nav attr-nav align-items-center">
        <li><a href="#" className="nav-link"><i className="linearicons-user"></i></a></li>
        <li><a href="#" className="nav-link"><i className="linearicons-heart"></i><span className="wishlist_count">0</span></a></li>
        <li className="dropdown cart_dropdown"><a className="nav-link cart_trigger" href="#" data-toggle="dropdown"><i className="linearicons-bag2"></i><span className="cart_count">2</span><span className="amount"><span className="currency_symbol">$</span>159.00</span></a>
            <div className="cart_box cart_right dropdown-menu dropdown-menu-right">
                <ul className="cart_list">
                    <li>
                        <a href="#" className="item_remove"><i className="ion-close"></i></a>
                        <a href="#"><img src="src/assets/images/cart_thamb1.jpg" alt="cart_thumb1" />Producto 01</a>
                        <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbol">$</span></span>78.00</span>
                    </li>
                    <li>
                        <a href="#" className="item_remove"><i className="ion-close"></i></a>
                        <a href="#"><img src="src/assets/images/cart_thamb2.jpg" alt="cart_thumb2"/ >Producto 02</a>
                        <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbol">$</span></span>81.00</span>
                    </li>
                </ul>
                <div className="cart_footer">
                    <p className="cart_total"><strong>Subtotal:</strong> <span className="cart_price"> <span className="price_symbol">$</span></span>159.00</p>
                    <p className="cart_buttons"><a href="#" className="btn btn-fill-line view-cart">Ver Carrito</a><a href="#" className="btn btn-fill-out checkout">Comprar</a></p>
                </div>
            </div>
        </li>
    </ul>
  )
}
