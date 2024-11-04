import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import SearchPage from '../SearchPage/SearchPage';
import './app.css';

function App() {
  const [searchTerm, setSearchTerm] = React.useState(''); 
  const [results, setResults] = React.useState([]); 
  const [loading, setLoading] = React.useState(false); 
  const [error, setError] = React.useState('');  

  return (
    <div className="page">
        <Header/>
        <Navigation /> 
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/data" component={SearchPage} />
        </Switch>
        <Footer/>
        <Preloader/>
      </div>
  );
}

export default App;

