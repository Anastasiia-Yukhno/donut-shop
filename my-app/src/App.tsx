import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Cart} from "./components/Cart";
import {Header} from "./components/Header";
import {FavoritesPage} from "./components/FavoritesPage";
import {Content} from "./components/Content";

function App() {
    return (
        <Router>
            <Header/>

            <Routes>
                <Route
                    path="/"
                    element={<Content/>}
                />
                <Route
                    path="/all"
                    element={<Content/>}
                />
                <Route
                    path="/favorites"
                    element={<FavoritesPage/>}
                />
                <Route
                    path="/cart"
                    element={<Cart/>}
                />
            </Routes>

        </Router>
    );
}

export default App;
