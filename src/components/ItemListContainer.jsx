import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Home from '../pages/Home';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const { catId } = useParams();
    const [catData, setCatData] = useState([]);
    const [prodData, setProdData] = useState([]);

    function filter(array, value, key) {
        return array.filter(key ? (a) => a[key] === value : (a) => Object.keys(a).some((k) => a[k] === value));
    }

    const getData = () => {
        fetch('/data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setCatData(myJson.categories);
                setProdData(myJson.products);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    if (catId !== undefined) {
        const prod_list = filter(prodData, parseInt(catId), 'catId');
        const cat_info = filter(catData, parseInt(catId), 'catId');
        return <ItemList prod_list={prod_list} cat_info={cat_info} />;
    } else {
        return <Home categories={catData} />;
    }
};

export default ItemListContainer;
