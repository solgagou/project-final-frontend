import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SearchPage from '../SearchPage/SearchPage';
import './page.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#main') {
      const mainElement = document.getElementById('main');
      if (mainElement) {
        mainElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  
  return (
    <div className="page">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/data" element={<SearchPage/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

