import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
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
                const tmp_prodData = myJson['products'].find((c) => c.id == itemId);
                setProdData(tmp_prodData);
                setCatData(myJson['categories'].find((c) => c.catId == tmp_prodData.catId));
            });
    };
    useEffect(() => {
        getData();
    }, []);

    if (prodData === null || catData === null || prodData === undefined || catData === undefined) {
        return null;
    }

    return <ItemDetail prodInfo={prodData} catInfo={catData} />;
};

export default ItemDetailContainer;
