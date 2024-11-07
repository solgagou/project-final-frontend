import React from 'react';
import { Route, Router, Switch, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import SearchPage from '../SearchPage/SearchPage';
import './page.css';

function App() {
  const location = useLocation();

  const [searchTerm, setSearchTerm] = React.useState(''); 
  const [results, setResults] = React.useState([]); 
  const [loading, setLoading] = React.useState(false); 
  const [error, setError] = React.useState('');  

  React.useEffect(() => {
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

