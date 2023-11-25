import React, { useContext, useEffect, useState } from 'react';
import Preloader from '../components/Preloader';

const Home = ({ categories }) => {
    return (
        <>
            <main>
                <div className="main_content">
                    <div className="section pb_20 small_pt">
                        <div className="container">
                            <div className="row">
                                {categories.map((item) => {
                                    return (
                                        <div className="col-md-6" key={item.catId}>
                                            <div className="sale-banner mb-3 mb-md-4">
                                                <a className="hover_effect1" href={`/category/${item.catId}`}>
                                                    <img src={`src/assets/images/${item.catImg}`} alt={item.catName} />
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
