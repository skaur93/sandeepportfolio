import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Projects from './components/Projects/Projects';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>


    </BrowserRouter>
  );
}

export default App;
