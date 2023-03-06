import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';
import Footer from './components/Footer';




function App() {
  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/menu' element={<MenuPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
