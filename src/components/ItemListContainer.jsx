import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Home from '../pages/Home';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, orderBy } from 'firebase/firestore';

const ItemListContainer = () => {
    const { catId } = useParams();
    const [catData, setCatData] = useState([]);
    const [prodData, setProdData] = useState([]);

    function filter(array, value, key) {
        return array.filter(key ? (a) => a[key] === value : (a) => Object.keys(a).some((k) => a[k] === value));
    }

    useEffect(() => {
        const db = getFirestore();
        const myCategories = query(collection(db, 'categories'), orderBy('order', 'asc'));

        getDocs(myCategories)
            .then((resp) => {
                const catList = resp.docs.map((doc) => ({ catId: doc.id, ...doc.data() }));
                setCatData(catList);
            })
            .catch((error) => console.log(error));

        const myProducts = query(collection(db, 'products'));

        getDocs(myProducts)
            .then((resp) => {
                const prodList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProdData(prodList);
            })
            .catch((error) => console.log(error));

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
        //             setCatData(myJson.categories);
        //             setProdData(myJson.products);
        //         });
        // };
        // getData();
    }, []);

    // console.log(catData);
    // console.log(prodData);

    if (catId !== undefined) {
        const prod_list = filter(prodData, catId, 'catId');
        const cat_info = filter(catData, catId, 'catId');
        // console.log(cat_info);
        return <ItemList prod_list={prod_list} cat_info={cat_info} />;
    } else {
        return catData ? <Home categories={catData} /> : null;
    }
};

export default ItemListContainer;
