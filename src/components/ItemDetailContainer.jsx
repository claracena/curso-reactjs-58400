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

        // setCatFilteredId(prodData.catId);

        // console.log(catFilteredId);

        // if (catFilteredId) {
        //     console.log(catFilteredId);
        //     const myCat = doc(db, 'categories', catFilteredId);

        //     getDoc(myCat)
        //         .then((res) => {
        //             const resData = res.data();
        //             setCatData(resData);
        //         })
        //         .catch((error) => console.log(error));
        // }

        // const myProduct = query(collection(db, 'products'), where('id', '===', itemId));

        // getDocs(myCategories)
        //     .then((resp) => {
        //         const catList = resp.docs.map((doc) => ({ catId: doc.id, ...doc.data() }));
        //         setCatData(catList);
        //     })
        //     .catch((error) => console.log(error));

        // getDocs(myProduct)
        //     .then((resp) => {
        //         const prod = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        //         setProdData(prod);
        //     })
        //     .catch((error) => console.log(error));

        // const myCategories = query(collection(db, 'categories'));
        // const getData = () => {
        //     fetch('/data.json', {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Accept: 'application/json',
        //         },
        //     })
        //         .then(function (response) {
        //             return response.json();
        //         })
        //         .then(function (myJson) {
        //             const tmp_prodData = myJson['products'].find((c) => c.id == itemId);
        //             setProdData(tmp_prodData);
        //             setCatData(myJson['categories'].find((c) => c.catId == tmp_prodData.catId));
        //         });
        // };
        // getData();
    }, []);

    useEffect(() => {
        if (catFilteredId) {
            const myCat = doc(db, 'categories', catFilteredId);

            getDoc(myCat)
                .then((res) => {
                    const resData = res.data();
                    setCatData(resData);
                })
                .catch((error) => console.log(error));
        }
    }, []);

    if (prodData === null || catData === null || prodData === undefined || catData === undefined) {
        return null;
    }

    return <ItemDetail prodInfo={prodData} catInfo={catData} />;
};

export default ItemDetailContainer;
