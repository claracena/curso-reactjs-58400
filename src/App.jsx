import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { useEffect } from 'react';
import { OrderCompleted } from './pages/OrderCompleted';

function App() {
    const modal = false;

    return (
        <BrowserRouter>
            {modal && <Modal />}
            <Navbar />
            <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route path="/category" element={<ItemListContainer />} />
                <Route path="/category/:catId" element={<ItemListContainer />} />
                <Route path="/item" element={<ItemDetailContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/:code" element={<OrderCompleted />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
