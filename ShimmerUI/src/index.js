import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import './index.css'; // Assuming you have a styles.css for global styles
import AboutUs from "./components/AboutUs";

import { BrowserRouter, Routes, Route } from 'react-router'
import { ProtectedRoutes } from "./components/ProtectedRoute";
import Autocomplete from "./components/Autocomplete";
import Otp from "./components/OTPInput/otp";
import TextProgressbar from "./components/progress-bar/progressbar";
import FileExplorer from "./components/file-explorer/file-explorer";

const App = () => {
    return (
        <div className="app">
            <header className="bg-gray-900 text-white text-xl font-bold py-5 w-full">
                <nav className="px-9 flex gap-2.5">
                    <a href="/">Memes</a>
                    <a href="/about-us">AboutUs</a>
                    <a href="/autocomplete">Autocomplete</a>
                    <a href="/otp">OtpInput</a>
                    <a href="/progress-bar">ProgressBar</a>
                    <a href="/file-explorer">FileExplorer</a>
                </nav>
            </header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/about-us" element={<AboutUs />}/>
                        <Route path="/autocomplete" element={<Autocomplete />}/>
                        <Route path="/otp" element={<Otp />}/>
                        <Route path="/progress-bar" element={<TextProgressbar progress={[1,20,40,50,60,70,90,100]}/>}/>
                        <Route path="/file-explorer" element={<FileExplorer />}/>
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