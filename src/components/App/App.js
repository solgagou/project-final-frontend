import React from 'react';
//import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Navigation/>
      <Footer/>
      <Preloader/>
    </div>
  );
}

export default App;

