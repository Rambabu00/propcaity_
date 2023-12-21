import react from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css";
const rootEle=document.getElementById('root');
ReactDOM.createRoot(rootEle).render(
    <react.StrictMode>
        <App></App>
    </react.StrictMode>
)
