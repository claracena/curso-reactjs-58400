import React from 'react';

const Footer = () => {
    return (
        <footer className="footer_dark">
            <div className="bottom_footer border-top-tran">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-md-0 text-center text-md-left">© 2023 Cesar Aracena</p>
                        </div>
                        <div className="col-md-6 text-center text-md-right" style={{ height: '30px' }}>
                            <div className="widget">
                                <ul className="social_icons social_white">
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
            </div>
        </footer>
    );
};

export default Footer;
