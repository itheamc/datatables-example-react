
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';




function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
        </nav>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/orders' element={<OrderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
