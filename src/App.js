import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/menu" element={<Menu/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;