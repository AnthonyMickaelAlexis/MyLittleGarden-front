import React from 'react';
// On importe ReactDOM pour pouvoir agir sur le DOM
import ReactDOM from 'react-dom/client';
// On importe BrowserRouter pour pouvoir créer des routes dans notre App
import { BrowserRouter } from 'react-router-dom';

import App from './Components/App/App';
import 'semantic-ui-css/semantic.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

