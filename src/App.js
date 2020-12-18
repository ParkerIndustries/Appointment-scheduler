import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Booking from './Booking'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
