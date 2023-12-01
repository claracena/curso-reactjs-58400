import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, getDocs, getFirestore, query, where, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [catFilteredId, setCatFilteredId] = useState('');
    const [catData, setCatData] = useState([]);
    const [prodData, setProdData] = useState([]);

    function filter(array, value, key) {
        return array.filter(key ? (a) => a[key] === value : (a) => Object.keys(a).some((k) => a[k] === value));
    }

    const db = getFirestore();

    useEffect(() => {
        const myProd = doc(db, 'products', itemId);

        getDoc(myProd)
            .then((res) => {
                const resData = { id: res.id, ...res.data() };
                setProdData(resData);
                setCatFilteredId(resData.catId);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        if (catFilteredId) {
            const myCat = doc(db, 'categories', catFilteredId);

            getDoc(myCat)
                .then((res) => {
                    const resData = { catId: res.id, ...res.data() };
                    setCatData(resData);
                })
                .catch((error) => console.log(error));
        }
    }, [catFilteredId]);

    if (prodData === null || catData === null || prodData === undefined || catData === undefined) {
        return null;
    }

    return <ItemDetail prodInfo={prodData} catInfo={catData} />;
};

export default ItemDetailContainer;
