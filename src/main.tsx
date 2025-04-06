import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from "./App.js";
import React from 'react';


const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Root element not found");
}

const root = ReactDom.createRoot(rootElement);

root.render(
<StrictMode>
    <App />
</StrictMode>)
