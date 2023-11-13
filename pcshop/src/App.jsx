import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SecondHome } from './pages/SecondHome';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Category } from './pages/Category';
import { WelcomePage } from './pages/WelcomePage';

function App() {
    const [categorias, setDataCat] = useState([]);
    const [productos, setDataProd] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // const result = await axios('../categorias.json');
            const result = await axios('https://raw.githubusercontent.com/claracena/files/main/categorias.json');

            setDataCat(result.data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            // const result = await axios('../productos.json');
            const result = await axios('https://raw.githubusercontent.com/claracena/files/main/productos.json');

            setDataProd(result.data);
        };

        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {['/', '/index.html'].map((path, index) => (
                    <Route
                        exact
                        path={path}
                        element={
                            <>
                                <Home categorias={categorias} />
                                <WelcomePage />
                                <ItemListContainer categorias={categorias} />
                            </>
                        }
                        key={index}
                    />
                ))}
                <Route
                    exact
                    path="/category/:cat_seo"
                    element={
                        <>
                            <SecondHome categorias={categorias} />
                            <Category categorias={categorias} />
                            <ItemListContainer categorias={categorias} productos={productos} />
                        </>
                    }
                />
                <Route
                    exact
                    path="/item/:id"
                    element={
                        <>
                            <SecondHome categorias={categorias} />
                            <ItemDetailContainer productos={productos} />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
