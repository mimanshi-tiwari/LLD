import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import './index.css'; // Assuming you have a styles.css for global styles

const App = () => {
    return (
        <div className="app">
        <h1>Shimmer UI</h1>
        <p>Welcome to the Shimmer UI application!</p>
        <div><Body /></div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);