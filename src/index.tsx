import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDPk-m7lOvjurlMnqh8E7b5gBgaZWNv9h8',
  authDomain: 'ezbooking-c.firebaseapp.com',
  databaseURL: 'https://ezbooking-c.firebaseio.com',
  projectId: 'ezbooking-c',
  storageBucket: 'ezbooking-c.appspot.com',
  messagingSenderId: '646603043364',
  appId: '1:646603043364:web:354d0ca3211da05b3ddeb1',
  measurementId: 'G-6Q0Z4VQ5DF',
};

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
