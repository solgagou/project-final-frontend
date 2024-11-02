import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import DataPage from '../DataPage/DataPage';
import './app.css';

function App() {
  return (
    <div className="page">
        <Header/>
        <Navigation /> 
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/data" component={DataPage} />
        </Switch>
        <Main/>
        <Footer/>
        <Preloader/>
      </div>
  );
}

export default App;

