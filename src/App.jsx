import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import LoadingContextProvider from './components/LoadingContextProvider';

function App() {
    const modal = false;

    return (
        <LoadingContextProvider>
            <BrowserRouter>
                {modal && <Modal />}
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />} />
                    <Route path="/category" element={<ItemListContainer />} />
                    <Route path="/category/:catId" element={<ItemListContainer />} />
                    <Route path="/item" element={<ItemDetailContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </LoadingContextProvider>
    );
}

export default App;
