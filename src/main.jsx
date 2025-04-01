import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //para react 19(directamente sin ReactDom)
import ReactDom from 'react-dom/client'
import App from "./App.jsx";


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
<StrictMode>
    <App />
</StrictMode>)
