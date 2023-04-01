import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCB11nZ4faqBue4P-lxA48cgMyrPl7-3Y",
  authDomain: "medicinabooks-302cc.firebaseapp.com",
  projectId: "medicinabooks-302cc",
  storageBucket: "medicinabooks-302cc.appspot.com",
  messagingSenderId: "390875377856",
  appId: "1:390875377856:web:f4d8ffa5a7c9e13dddfd25"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
