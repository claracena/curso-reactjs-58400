import React, { useEffect, useState } from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';

export const ItemDetailContainer = ({ productos }) => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, []);

    const { id } = useParams();

    const resultado = Object.values(productos).find( (obj) => { return obj.id == id })

    // console.log(resultado['name'])
    
    if (loading) { return null }
    
    return (
    <>
        <div className="breadcrumb_section bg_gray page-title-mini">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="page-title">
                            <h1>{resultado['name']}</h1>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ol className="breadcrumb justify-content-md-end">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active">Shop List</li>
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
                                <img id="product_img" src={`../../src/assets/images/${resultado.id}-1.jpg`} data-zoom-image={`../../src/assets/images/${resultado.id}-1.jpg`} alt="product_img1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="pr_detail">
                            <div className="product_description">
                                <h4 className="product_title">{resultado['name']}</h4>
                                <div className="product_price">
                                    <span className="price">${resultado['price']}</span>
                                    {resultado['sale'] ? (<del>${resultado['realprice']}</del>) : ""}
                                </div>
                                <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{ width: '80%' }}></div>
                                        </div>
                                        <span className="rating_num">(21)</span>
                                    </div>
                                <div className="pr_desc">
                                    <p>{resultado['description']}</p>
                                </div>
                                <div className="product_sort_info">
                                    <ul>
                                        {resultado['deals'].map((item, index) => {
                                            return (
                                                <li key={index}><i className={item[0]}></i>{item[1]}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <ItemCount prodid={resultado['id']} stock={resultado['stock']} />
                            <hr />
                            
                            <div className="product_share">
                                <span>Share:</span>
                                <ul className="social_icons">
                                    <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                    <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                                    <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                                    <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}