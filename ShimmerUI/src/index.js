import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import './index.css'; // Assuming you have a styles.css for global styles
import AboutUs from "./components/AboutUs";

import { BrowserRouter, Routes, Route } from 'react-router'
import { ProtectedRoutes } from "./components/ProtectedRoute";
import Autocomplete from "./components/Autocomplete";

const App = () => {
    return (
        <div className="app">
            <header className="bg-gray-900 text-white text-xl font-bold py-5">
                <nav className="px-9 flex gap-2.5">
                    <a href="/">Memes</a>
                    <a href="/about-us">AboutUs</a>
                    <a href="/autocomplete">Autocomplete</a>
                </nav>
            </header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/about-us" element={<AboutUs />}/>
                        <Route path="/autocomplete" element={<Autocomplete />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);