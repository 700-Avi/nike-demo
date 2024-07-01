import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import Home from '../src/components/menu/Home';
const App = () => {
  return (
    <div>
      <Router>
      <Navigation />
      <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/home" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;