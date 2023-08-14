import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
    <Navbar />
    <Routes>
      <Route path='/'element={<Home />}/>
      {/* <Route path='/about'element={<About />}/>
      <Route path='/projects'element={<Projects />}/>
      <Route path='/contact'element={<Contact />}/>     */}
    </Routes>
    {/* <Footer /> */}
  </Router>
    </div>
  );
}

export default App;
