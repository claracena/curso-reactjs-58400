import React from 'react';
import { Header } from './components/Header';
import { ItemListContainer } from './components/ItemListContainer';

class App extends React.Component {
    state = { productos: [], cargados: false };

    getProductos = () => {
        fetch('https://raw.githubusercontent.com/claracena/files/main/productos.json', {})
            .then(data => data.json())
            .then(data => {
                this.setState({ productos: data, cargados: true });
            })
            .catch((reason) => console.log('Msg: ' + reason));
    };

    obtenerProductos = this.getProductos();

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
                <Header />
                <ItemListContainer productos={this.state.productos} />
            </>
        );
    }
};

export default App;
