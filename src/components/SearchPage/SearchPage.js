import React, { useState, useEffect } from 'react';
import * as auth from "../../utils/auth";
import Preloader from '../Preloader/Preloader';
import searchIcon from '../../images/search_icon.svg';
import locationIcon from '../../images/location_icon.svg';
import showMore from '../../images/dropdown_icon.svg';

function SearchPage() {
  const [date, setDate] = useState(''); 
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]); 
  const [searchExecuted, setSearchExecuted] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 
  const [visibleCount, setVisibleCount] = useState(3);

    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  
    const handleLocationChange = (e) => {
      setLocation(e.target.value);
    };
  
    const handleSearchClick = async () => {
      if (!date || !location) {
        setError("Por favor, completa todos los campos.");
        return;
      }
  
      setError('');
      setLoading(true);
      setSearchExecuted(true);
  
      try {
        const events = await auth.getPlaysData(date, location);
    setResults(events);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const handleShowMoreClick = () => {
      setVisibleCount((prevCount) => prevCount + 3);
    };

  return (
    <div className="search__page">
      <main className="search__content">
       <section className="search__section">
        <h1 className='search__title'>Buscar Obras de Teatro</h1>
        <form className='search__form'>
          <div className="search__input-wrapper">
            <span>
              <img className="search__icon" src={searchIcon} alt="Buscar" />
            </span> 
            <input
              className='search__input'
              type="date"
              placeholder="Fecha de la obra teatral"
              value={date} 
              onChange={handleDateChange} 
            />
          </div>
          <div className="search__input-wrapper">
            <span>
              <img className="search__icon" src={locationIcon} alt="Place" />
            </span> 
            <input
              className='search__input'
              type="text"
              placeholder="Ciudad"
              value={location} 
              onChange={handleLocationChange} 
            />
          </div>
        </form>
        <button className='search__button' type="button" onClick={handleSearchClick}>Buscar</button>
       </section>
        
    {loading ? (
      <Preloader />
    ) : results.length > 0 ? (
      <section className="results">
        <div className='cards'>
         {results.slice(0, visibleCount).map((event) => (
           <div className="event__card" key={event.id}>
            <img className='event__photo' src={event.images[0]?.url} alt={event.name}></img>
            <div className="event__info">
              <h3 className="event__name">{event.name}</h3>
              <p className="event__date">{event.dates.start.localDate}</p>
              <p className="event__location">
              {event._embedded.venues[0]?.address.line1}, {" "} {event._embedded.venues[0]?.city.name}
            </p>
          </div>
          <div className="overlay">
            <p className="overlay__description">{event.description || 'No description available'}</p>
          </div>
      </div>
    ))}
    </div>

    {visibleCount < results.length && (
      <button 
        className="show-more__button" 
        type="button" 
        onClick={handleShowMoreClick}>
        Mostrar más
        <img className="show-more__icon" src={showMore} alt="" />
      </button>
    )}
      </section>

    ) : searchExecuted && !loading && results.length === 0 ? (
      <p className='error__message'>No se encontraron resultados</p>
    ) : null}
   
    </main>   
  </div>
  );
  
}

export default SearchPage