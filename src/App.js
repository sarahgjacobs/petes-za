import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
    <Navbar />
    <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/menu'element={<Menu />}/>
      <Route path='/about'element={<About />}/>



    </Routes>
    <Footer />
  </Router>
    </div>
  );
}

export default App;
