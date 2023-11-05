import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { Home } from './pages/Home';
import { SecondHome } from './pages/SecondHome';
import { ItemListContainer } from './components/ItemListContainer';
import { Category } from './pages/Category';
import { Product } from './pages/Product';
import { WelcomePage } from './pages/WelcomePage';

class App extends React.Component {
    state = { productos: [], productos_cargados: false, categorias: [], categorias_cargadas: false, subcategorias: [], subcategorias_cargadas: false };

    getProductos = () => {
        fetch('https://raw.githubusercontent.com/claracena/files/main/productos.json?v=1', {})
            .then(data => data.json())
            .then(data => {
                this.setState({ productos: data, productos_cargados: true });
            })
            .catch((reason) => console.log('Msg: ' + reason));
    };

    obtenerProductos = this.getProductos();

    getCategorias = () => {
        // fetch('https://raw.githubusercontent.com/claracena/files/main/categorias.json?v=1', {})
        fetch('../categorias.json?v=1', {})
            .then(data => data.json())
            .then(data => {
                this.setState({ categorias: data, categorias_cargadas: true });
            })
            .catch((reason) => console.log('Msg: ' + reason));
    };

    obtenerCategorias = this.getCategorias();

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

    render() {
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

        return (
            <>
                <Router>
                    <Routes>
                        {["/", "/index.html"].map((path, index) => <Route path={path} element={<><Home categorias={this.state.categorias} /><WelcomePage /></>} key={index} />)}
                        <Route path='/category' element={<><SecondHome categorias={this.state.categorias} /><Category /></>} />
                        <Route path='/category/:catSeo' element={<><SecondHome categorias={this.state.categorias} /><Category /></>} />
                        <Route path='/product' element={<><SecondHome /><Product /></>} />
                    </Routes>
                </Router>
            </>
        );
    }
};

export default App;
