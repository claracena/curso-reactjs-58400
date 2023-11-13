import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { SecondHome } from './pages/SecondHome';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Category } from './pages/Category';
import { Product } from './pages/Product';
import { WelcomePage } from './pages/WelcomePage';

// class App extends React.Component {
//     state = { productos: [], productos_cargados: false, categorias: [], categorias_cargadas: false, subcategorias: [], subcategorias_cargadas: false };

//     getProductos = () => {
//         fetch('https://raw.githubusercontent.com/claracena/files/main/productos.json?v=1', {})
//             .then(data => data.json())
//             .then(data => {
//                 this.setState({ productos: data, productos_cargados: true });
//             })
//             .catch((reason) => console.log('Msg: ' + reason));
//     };

//     obtenerProductos = this.getProductos();

//     getCategorias = () => {
//         // fetch('https://raw.githubusercontent.com/claracena/files/main/categorias.json?v=1', {})
//         fetch('../categorias.json?v=1', {})
//             .then(data => data.json())
//             .then(data => {
//                 this.setState({ categorias: data, categorias_cargadas: true });
//             })
//             .catch((reason) => console.log('Msg: ' + reason));
//     };

//     obtenerCategorias = this.getCategorias();

// getSubCategorias = () => {
//     // fetch('https://raw.githubusercontent.com/claracena/files/main/subcategorias.json?v=1', {})
//     fetch('../subcategorias.json?v=1', {})
//         .then(data => data.json())
//         .then(data => {
//             this.setState({ subcategorias: data, subcategorias_cargadas: true });
//         })
//         .catch((reason) => console.log('Msg: ' + reason));
// };

// obtenerSubCategorias = this.getSubCategorias();

// render() {
// let { productos, cargados } = this.state;

// const prodLoop = setInterval(() => {
//     if (this.state.cargados) {
//         clearInterval(prodLoop);
//         console.log(this.state.cargados, '1')
//     }
//     console.log(this.state.cargados, '2')
// }, 500);

// if (!this.state.cargados) {
//     prodLoop;
//     console.log(this.state.cargados, '2')
// }

// https://stackoverflow.com/questions/51556988/react-render-component-asynchronously-after-data-is-fetched

//         return (
//             <BrowserRouter>
//                 <Routes>
//                     {["/", "/index.html"].map((path, index) => <Route exact path={path} element={<><Home categorias={this.state.categorias} /><WelcomePage /></>} key={index} />)}
//                     <Route path='/category' element={<><SecondHome categorias={this.state.categorias} /><Category categorias={this.state.categorias} /></>} />
//                     <Route path='/category/:cat_seo' element={<><SecondHome categorias={this.state.categorias} productos={this.state.productos} /><Category categorias={this.state.categorias} /></>} />
//                     <Route exact path='/product/:prod_id' element={<><SecondHome categorias={this.state.categorias} productos={this.state.productos} /><Product /></>} />
//                 </Routes>
//             </BrowserRouter>
//         );
//     }
// };

// export default App;

function App() {
    const [categorias, setDataCat] = useState([]);
    const [productos, setDataProd] = useState([]);

    // useEffect(async () => {
    //     const result = await axios(
    //         'https://raw.githubusercontent.com/claracena/files/main/categorias.json',
    //     );

    //     setDataCat(result.data);
    // });

    // useEffect(() => {
    //     async () => {
    //         const result = await axios('https://raw.githubusercontent.com/claracena/files/main/productos.json');

    //         setDataCat(result.data);
    //     }
    // fetch('https://raw.githubusercontent.com/claracena/files/main/categorias.json?v=1', {})
    //     // fetch('../categorias.json?v=1', {})
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setDataCat(data);
    //     })
    //     .catch((reason) => console.log('Msg: ' + reason));
    // });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('../categorias.json');
            // const result = await axios('https://raw.githubusercontent.com/claracena/files/main/categorias.json');

            setDataCat(result.data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('../productos.json');
            // const result = await axios('https://raw.githubusercontent.com/claracena/files/main/productos.json');

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
                {/* <Route
                    exact
                    path="/category"
                    element={
                        <>
                            <SecondHome categorias={categorias} />
                            <Category categorias={categorias} />
                            <ItemListContainer categorias={categorias} />
                        </>
                    }
                /> */}
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
                            {/* <Category categorias={categorias} /> */}
                            <ItemDetailContainer productos={productos} />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
