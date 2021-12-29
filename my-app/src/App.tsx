import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Cart} from "./components/Cart";
import {AllPage} from "./components/AllPage";
import {Header} from "./components/Header";
import {FavoritesPage} from "./components/FavoritesPage";

function App() {
    return (
        <Router>
            <Header/>

            <Routes>
                <Route
                    path="/"
                    element={<AllPage></AllPage>}
                />
                <Route
                    path="/all"
                    element={<AllPage></AllPage>}
                />
                <Route
                    path="/favorites"
                    element={<FavoritesPage></FavoritesPage>}
                />

                <Route
                    path="/cart"
                    element={<Cart></Cart>}
                />
            </Routes>

        </Router>
    );
}

export default App;
