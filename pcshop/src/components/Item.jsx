import React from 'react'

const Item = ({ item, index }) => {
  return (
    <div className="col-lg-3 col-md-4 col-6" key={index}>
        <div className="product">
            {item.sale ? (<span className="pr_flash bg-danger">Oferta</span>) : ""}
            <div className="product_img">
                <a href="#">
                    <img className='img-cat-prod' src={`../../src/assets/images/${item.id}-1.jpg`} alt="product_img1" />
                </a>
                <div className="product_action_box">
                    <ul className="list_none pr_action_btn">
                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                        <li><a href="#" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                        <li><a href="#"><i className="icon-heart"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="product_info">
                <h6 className="product_title"><a href="#">{item.name}</a></h6>
                <div className="product_price">
                    <span className="price">${item.price}</span>
                    {item.sale ? (<del>${item.realprice}</del>) : ""}
                </div>
                <div className="rating_wrap">
                    <div className="rating">
                        <div className="product_rate" style={{ width: '80%' }}></div>
                    </div>
                    <span className="rating_num">(21)</span>
                </div>
                <div className="pr_desc">
                    <p>{item.description}</p>
                </div>
                <div className="list_product_action_box">
                    <ul className="list_none pr_action_btn">
                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Agregar al carrito</a></li>
                        <li><a href="#" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                        <li><a href="#"><i className="icon-heart"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item