import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/ShoppingCartContext.jsx';
window.jQuery = window.$ = $;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAH9Df1u_3xOATFbCHfWE7pzkgkSiWed5s',
    authDomain: 'reactjs-fbf9a.firebaseapp.com',
    projectId: 'reactjs-fbf9a',
    storageBucket: 'reactjs-fbf9a.appspot.com',
    messagingSenderId: '39885234429',
    appId: '1:39885234429:web:8c84b8e4f0834904269e94',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);
