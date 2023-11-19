import React, { useContext } from 'react';
import { LoadingContext } from '../components/LoadingContextProvider';
import Preloader from '../components/Preloader';
import Item from './Item';

const ItemList = ({ prod_list, cat_info }) => {
    const { loading } = useContext(LoadingContext);
    return (
        <>
            {loading == true ? <Preloader /> : ''}
            <div className="breadcrumb_section bg_gray page-title-mini">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="page-title">
                                <h1>{cat_info[0]['catName']}</h1>
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
                                <li className="breadcrumb-item active">{cat_info[0]['catName']}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section custom-section">
                <div className="container">
                    {prod_list.map((item, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col-12">
                                    <div className="row shop_container list">
                                        <div className="col-lg-3 col-md-4 col-6">{<Item prod={item} />}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ItemList;
