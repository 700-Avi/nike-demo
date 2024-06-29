import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import Home from '../src/components/menu/Home';
import Footer from "../src/components/footer"
import Login from '../src/components/auth/Login'

const App = () => {
  return (
    <div>
      <Router>
      <Navigation />
      <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
};

export default App;