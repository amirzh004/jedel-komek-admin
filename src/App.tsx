// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home.tsx';
import Categories from "./pages/Categories.tsx";
import Items from "./pages/Items.tsx";
import TopBar from "./components/TopBar.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div>
                    <TopBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/items" element={<Items />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
