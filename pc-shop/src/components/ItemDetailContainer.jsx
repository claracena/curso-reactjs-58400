import React, { useState, useEffect, useContext } from 'react';
import { LoadingContext } from '../components/LoadingContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const { loading, setLoading } = useContext(LoadingContext);
    const [catData, setCatData] = useState([]);
    const [prodData, setProdData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('../categorias.json');
                // const {data: response} = await axios.get('https://raw.githubusercontent.com/claracena/files/main/categorias.json');
                setCatData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('../productos.json');
                // const {data: response} = await axios.get('https://raw.githubusercontent.com/claracena/files/main/productos.json');
                setProdData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    function filter(array, value, key) {
        return array.filter(key ? (a) => a[key] === value : (a) => Object.keys(a).some((k) => a[k] === value));
    }

    if (itemId === undefined) {
        return <Home categories={catData} />;
    } else if (itemId !== undefined && !loading) {
        // console.log(catData);
        const prod_info = filter(prodData, parseInt(itemId), 'id');
        const cat_info = filter(catData, parseInt(prod_info[0].id), 'catId');

        return <ItemDetail prod_info={prod_info} cat_info={cat_info} />;
    }
};

export default ItemDetailContainer;
