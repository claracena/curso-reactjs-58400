import { Header } from './components/Header';
import { ItemListContainer } from './components/ItemListContainer';

const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer
                greeting={'Bienvenido a PC SHOP. Este sitio es el entregable del curso de ReactJS de coderhouse, comisión 58400'}
            />
        </>
    );
};

export default App;
