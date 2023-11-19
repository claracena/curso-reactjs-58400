import React from 'react';

const Item = ({ prod }) => {
    function formatToCurrency(amount) {
        return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    return (
        <div className="product">
            <div className="product_img">
                <a href={`/item/${prod.id}`}>
                    <img src={`../src/assets/images/products/${prod.img1}`} alt="product_img1" />
                </a>
                <div className="product_action_box">
                    <ul className="list_none pr_action_btn">
                        <li className="add-to-cart">
                            <a href="#">
                                <i className="icon-basket-loaded"></i> Add To Cart
                            </a>
                        </li>
                        <li>
                            <a href="#" className="popup-ajax">
                                <i className="icon-shuffle"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="popup-ajax">
                                <i className="icon-magnifier-add"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon-heart"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="product_info">
                <h6 className="product_title">
                    <a href={`/item/${prod.id}`}>{prod.name}</a>
                </h6>
                <div className="product_price">
                    <span className="price">
                        $
                        {prod.discount == 0 ? formatToCurrency(prod.normalPrice) : formatToCurrency(prod.normalPrice * ((100 - prod.discount) / 100))}
                    </span>
                    {prod.discount > 0 ? <del>${formatToCurrency(prod.normalPrice)}</del> : null}
                    {prod.discount > 0 ? (
                        <div className="on_sale">
                            <span>{prod.discount}% Off</span>
                        </div>
                    ) : null}
                </div>
                <div className="rating_wrap">
                    <div className="rating">
                        <div className="product_rate" style={{ width: '80%' }}></div>
                    </div>
                    <span className="rating_num">(21)</span>
                </div>
                <div className="pr_desc">
                    <p>{prod.shortDesc}</p>
                </div>
                <div className="list_product_action_box">
                    <ul className="list_none pr_action_btn">
                        <li className="add-to-cart">
                            <a href="#">
                                <i className="icon-basket-loaded"></i> Agregar al Carrito
                            </a>
                        </li>
                        <li>
                            <a href="#" className="popup-ajax">
                                <i className="icon-shuffle"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="popup-ajax">
                                <i className="icon-magnifier-add"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon-heart"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Item;
