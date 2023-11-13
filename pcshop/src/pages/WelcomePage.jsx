import Image_banner_1 from "../assets/images/banner_clac_01.jpg";
import Image_banner_2 from "../assets/images/banner_clac_02.jpg";
import Image_banner_3 from "../assets/images/banner_clac_03.jpg";

export const WelcomePage = () => {
    return (
        <div className="mt-4 staggered-animation-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 offset-lg-3">
                        <div className="banner_section shop_el_slider">
                            <div id="carouselExampleControls" className="carousel slide carousel-fade light_arrow" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active background_bg" data-img-src="../assets/images/banner_clac_01.jpg" style={{backgroundImage: 'url(' + Image_banner_1 + ')' }}>
                                        <div className="banner_slide_content banner_content_inner">
                                            <div className="col-lg-9 col-10">
                                                <div className="banner_content3 overflow-hidden">
                                                    <h5 className="mt-1 mb-2 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Nuevo lanzamiento!</h5>
                                                    <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Galaxy S23 FE</h2>
                                                    <h4 className="staggered-animation mb-4 product-price" data-animation="slideInLeft" data-animation-delay="1.2s"><span className="price">$990.95</span><del>$1190.95</del></h4>
                                                    <a className="mb-2 btn btn-fill-out btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Comprar</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item background_bg" data-img-src="../assets/images/banner_clac_02.jpg" style={{backgroundImage: 'url(' + Image_banner_2 + ')' }}>
                                        <div className="banner_slide_content banner_content_inner">
                                            <div className="col-lg-8 col-10">
                                                <div className="banner_content3 overflow-hidden">
                                                    <h5 className="mt-1 mb-2 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">10% de descuento por lanzamiento!</h5>
                                                    <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Samsung Laptop 360 Pro</h2>
                                                    <h4 className="staggered-animation mb-4 mb-sm-4 product-price" data-animation="slideInLeft" data-animation-delay="1.2s"><span className="price">$1169.95</span><del>$1299.95</del></h4>
                                                    <a className="mb-2 btn btn-fill-out btn-radius staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Comprar</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item background_bg" data-img-src="../assets/images/banner_clac_03.jpg" style={{backgroundImage: 'url(' + Image_banner_3 + ')' }}>
                                        <div className="banner_slide_content banner_content_inner">
                                            <div className="col-lg-8 col-10">
                                                <div className="banner_content3 overflow-hidden">
                                                    <h5 className="mt-1 mb-2 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Los mejores gabinetes del mercado!</h5>
                                                    <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Gabinetes para Mod</h2>
                                                    <h4 className="staggered-animation mb-4 product-price" data-animation="slideInLeft" data-animation-delay="1.2s"><span className="price">Desde $99.95</span></h4>
                                                    <a className="mb-2 btn btn-fill-out btn-radius staggered-animation text-uppercase" href="/category/cases" data-animation="slideInLeft" data-animation-delay="1.5s">Comprar</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ol className="carousel-indicators indicators_style3">
                                    <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
