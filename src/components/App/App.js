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
  const [searchTerm, setSearchTerm] = React.useState(''); // Término de búsqueda
  const [results, setResults] = React.useState([]); // Resultados de búsqueda
  const [loading, setLoading] = React.useState(false); // Estado de carga
  const [error, setError] = React.useState(''); // Manejo de errores 

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

