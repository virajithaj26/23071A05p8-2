import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import RandomGenerator from './components/RandomGenerator';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-blue-500 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/register" className="mr-4">Register</Link>
        <Link to="/contact" className="mr-4">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RandomGenerator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

