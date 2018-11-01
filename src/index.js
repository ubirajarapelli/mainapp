import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import App from './App';

import * as singleSpa from 'single-spa';
import {registerTrayApp} from "./applications/tray-app";

ReactDOM.render(<App/>,document.getElementById('root'));

registerTrayApp();

// serviceWorker.unregister();

singleSpa.start();

