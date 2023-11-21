import { ItemCount } from './ItemCount';

const ItemDetail = ({ prodInfo, catInfo }) => {
    function filter(array, value, key) {
        return array.filter(key ? (a) => a[key] === value : (a) => Object.keys(a).some((k) => a[k] === value));
    }
    function formatToCurrency(amount) {
        return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    return (
        <>
            <main>
                <div className="breadcrumb_section bg_gray page-title-mini">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="page-title">
                                    <h1>{prodInfo['name']}</h1>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ol className="breadcrumb justify-content-md-end">
                                    <li className="breadcrumb-item">
                                        <a href="/">Inicio</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="/category">Categor&iacute;as</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href={`/category/${catInfo['catId']}`}>{catInfo['catName']}</a>
                                    </li>
                                    <li className="breadcrumb-item active">{prodInfo['brand']}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                                <div className="product-image">
                                    <div className="product_img_box">
                                        <img
                                            id="product_img"
                                            src={`../../src/assets/images/products/${prodInfo.img1}`}
                                            data-zoom-image="../../src/assets/images/product_zoom_img1.jpg"
                                            alt="product_img1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="pr_detail">
                                    <div className="product_description">
                                        <h4 className="product_title">
                                            <a href="#">{prodInfo['name']}</a>
                                        </h4>
                                        <div className="product_price">
                                            <span className="price">
                                                $
                                                {prodInfo.discount == 0
                                                    ? formatToCurrency(prodInfo.normalPrice)
                                                    : formatToCurrency(prodInfo.normalPrice * ((100 - prodInfo.discount) / 100))}
                                            </span>
                                            {prodInfo.discount > 0 ? <del>${formatToCurrency(prodInfo.normalPrice)}</del> : null}
                                            {prodInfo.discount > 0 ? (
                                                <div className="on_sale">
                                                    <span>{prodInfo.discount}% Off</span>
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
                                            <p>{prodInfo['shortDesc']}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <ItemCount prodid={prodInfo.id} stock={prodInfo.stock} />
                                    {/* <div className="cart_extra">
                                        <div className="cart-product-quantity">
                                            <div className="quantity">
                                                <input type="button" defaultValue="-" className="minus" />
                                                <input type="text" name="quantity" defaultValue="1" title="Qty" className="qty" size="4" />
                                                <input type="button" defaultValue="+" className="plus" />
                                            </div>
                                        </div>
                                        <div className="cart_btn">
                                            <button className="btn btn-fill-out btn-addtocart" type="button">
                                                <i className="icon-basket-loaded"></i> Agregar al Carrito
                                            </button>
                                            <a className="add_wishlist" href="#">
                                                <i className="icon-heart"></i>
                                            </a>
                                        </div>
                                    </div> */}
                                    <hr />

                                    <div className="product_share">
                                        <span>Compartir:</span>
                                        <ul className="social_icons">
                                            <li>
                                                <a href="#">
                                                    <i className="ion-social-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ion-social-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ion-social-googleplus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ion-social-youtube-outline"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ion-social-instagram-outline"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="large_divider clearfix"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-style3">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                id="Description-tab"
                                                data-toggle="tab"
                                                href="#Description"
                                                role="tab"
                                                aria-controls="Description"
                                                aria-selected="true">
                                                Descripci&oacute;n
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content shop_info_tab active">
                                        <div className="tab-pane fade show active" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                                            <p>{prodInfo['desc']}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ItemDetail;
