
import './App.css';
import Header from './Header';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Blog from './pages/Blog';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Header />

    <Routes>
      <Route path='/' exact  element={<Homepage />}></Route>
      <Route path='/about' exact  element={<About />}></Route>
      <Route path='/services' exact  element={<Services />}></Route>
      <Route path='/contact' exact  element={<Contact />}></Route>
      <Route path='/support' exact  element={<Support />}></Route>
      <Route path='/blog' exact  element={<Blog />}></Route>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
