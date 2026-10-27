import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Student Management System</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/register">Register</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;