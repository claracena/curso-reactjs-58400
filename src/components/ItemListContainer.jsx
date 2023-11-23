import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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

    // const prod_list = filter(prodData, parseInt(catId), 'catId');
    // const cat_info = filter(catData, parseInt(catId), 'catId');

    // return <ItemList prod_list={prod_list} cat_info={cat_info} />;

    // const { catId } = useParams();
    // const { loading, setLoading } = useContext(LoadingContext);
    // const [catData, setCatData] = useState([]);
    // const [prodData, setProdData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const { data: response } = await axios.get('../categorias.json');
    //             // const {data: response} = await axios.get('https://raw.githubusercontent.com/claracena/files/main/categorias.json');
    //             setCatData(response);
    //         } catch (error) {
    //             console.error(error.message);
    //         }
    //         setLoading(false);
    //     };

    //     fetchData();
    // }, []);

    // if (catId === undefined) {
    //     return <Home categories={catData} />;
    // }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const { data: response } = await axios.get('../productos.json');
    //             // const {data: response} = await axios.get('https://raw.githubusercontent.com/claracena/files/main/productos.json');
    //             setProdData(response);
    //         } catch (error) {
    //             console.error(error.message);
    //         }
    //         setLoading(false);
    //     };

    //     fetchData();
    // }, []);

    // function filter(array, value, key) {
    //     return array.filter(key ? (a) => a[key] === value : (a) => Object.keys(a).some((k) => a[k] === value));
    // }

    // const prod_list = filter(prodData, parseInt(catId), 'catId');
    // const cat_info = filter(catData, parseInt(catId), 'catId');

    // if (!loading) {
    //     return <ItemList prod_list={prod_list} cat_info={cat_info} />;
    // }
};

export default ItemListContainer;
