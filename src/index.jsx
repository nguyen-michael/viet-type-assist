import React from 'react';
import ReactDOM from 'react-dom';
import './index-with-tailwind.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Register as a PWA.
serviceWorker.register();