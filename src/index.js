import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider, themeContext} from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<ThemeProvider>
    <App/>
</ThemeProvider>);
