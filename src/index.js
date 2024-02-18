import React from 'react';
import  * as ReactDOMClient  from 'react-dom/client';
import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
const container = document.getElementById('root'); 
const root = ReactDOMClient.createRoot(container); 
root.render(<App tab="profile"/>);
