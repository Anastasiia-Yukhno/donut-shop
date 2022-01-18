import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Cart, All, Favorites} from './pages';

export { links } from './contsts';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<All />}
        />
        <Route
          path="/favorites"
          element={<Favorites/>}
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
