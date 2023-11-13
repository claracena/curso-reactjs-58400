import React, { useState, useEffect } from 'react';
import { ItemCount } from "./ItemCount";
import { NavLink, useParams, Link } from 'react-router-dom';
import ItemList from './ItemList';

export const ItemListContainer = ({ categorias, productos }) => {
    const { cat_seo } = useParams();
    let categoria;
    // let lista_productos;

    function filter(array, value, key) {
        return array.filter(key
            ? a => a[key] === value
            : a => Object.keys(a).some(k => a[k] === value)
        );
    }

    if (cat_seo) {
        categoria = filter(categorias, cat_seo, 'catSeo')[0];
        // lista_productos = filter(productos, categoria['catId'], 'cat');
    }


    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
    );

    return (
        <div className="mt-4 staggered-animation-wrap">
            <div className="container">
                {!cat_seo ? (
                <>
                <div className="row">
                    <div className="col-12">
                        <div className="heading_tab_header">
                            <div className="heading_s2">
                                <h4>Categor&iacute;as</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {chunk(categorias, 3).map((row, index) => {
                            return (
                                <div className="row mb-3" key={index}>
                                {row.map((col, indexi) => {
                                    return (
                                        <div className="col-md-4" key={indexi}>
                                            <Link to={`/category/${col.catSeo}`}>
                                                <div className="card custom-card-index">
                                                    <img src={`../../src/assets/images/${col.catImg}`} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{col.catName}</h5>
                                                        <p className="card-text">{col.catShortDesc}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                </>
                ) : (
                <ItemList cat_id={categoria['catId']} productos={productos} />
                // <div className="section sub-section-custom">
                //     <div className="container">
                //         <div className="row">
                //             <div className="col-12">
                //                 <div className="row shop_container list">
                //                     {lista_productos.map((item, index) => {
                //                         return (
                //                             <div className="col-lg-3 col-md-4 col-6" key={index}>
                //                                 <div className="product">
                //                                     {item.sale ? (<span className="pr_flash bg-danger">Oferta</span>) : ""}
                //                                     <div className="product_img">
                //                                         <a href="#">
                //                                             <img className='img-cat-prod' src={`../../src/assets/images/${item.id}-1.jpg`} alt="product_img1" />
                //                                         </a>
                //                                         <div className="product_action_box">
                //                                             <ul className="list_none pr_action_btn">
                //                                                 <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                //                                                 <li><a href="#" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                //                                                 <li><a href="#"><i className="icon-heart"></i></a></li>
                //                                             </ul>
                //                                         </div>
                //                                     </div>
                //                                     <div className="product_info">
                //                                         <h6 className="product_title"><a href="#">{item.name}</a></h6>
                //                                         <div className="product_price">
                //                                             <span className="price">${item.price}</span>
                //                                             {item.sale ? (<del>${item.realprice}</del>) : ""}
                //                                         </div>
                //                                         <div className="rating_wrap">
                //                                             <div className="rating">
                //                                                 <div className="product_rate" style={{ width: '80%' }}></div>
                //                                             </div>
                //                                             <span className="rating_num">(21)</span>
                //                                         </div>
                //                                         <div className="pr_desc">
                //                                             <p>{item.description}</p>
                //                                         </div>
                //                                         <div className="list_product_action_box">
                //                                             <ul className="list_none pr_action_btn">
                //                                                 <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Agregar al carrito</a></li>
                //                                                 <li><a href="#" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                //                                                 <li><a href="#"><i className="icon-heart"></i></a></li>
                //                                             </ul>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                         )
                //                     })}
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                )}
            </div>
        </div>
    );

};
