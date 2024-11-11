import React from 'react';
//import Header from '../Header/Header';
//import Navigation from '../Navigation/Navigation';
//import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import searchIcon from '../../images/search_icon.svg';
import locationIcon from '../../images/location_icon.svg';
import photo from '../../images/obra_notepreocupes.jpg';

function SearchPage() {
  return (
    <div className="search__page">
      <main className="search__content">
       <section className="search__section">
        <h1 className='search__title'>Buscar Obras de Teatro</h1>
        <form className='search__form'>
          <div className="search__input-wrapper">
            <span>
              <img class="search__icon" src={searchIcon} alt="Buscar" />
            </span> 
            <input
              className='search__input'
              type="text"
              placeholder="Obra de teatro..."
            />
          </div>
          <div className="search__input-wrapper">
            <span>
              <img class="search__icon" src={locationIcon} alt="Place" />
            </span> 
            <input
              className='search__input'
              type="text"
              placeholder="Ciudad"
            />
          </div>
        </form>
        <button className='search__button' type="submit" onClick=''>Buscar</button>
       </section>
        <Preloader /> 

         
         <p className="error-message">*mensaje de error si existe</p>

         {/*obras destacadas */}
         <section className="featured__section">
          <div className="event__card">
            <img className='event__photo' src={photo}></img>
            <div className='event__info'>
              <h3 className="event__title" onClick=''>Título</h3>
              <p className="event__day">Fecha y hora</p>
              <p className="event__address">Dirección, Ciudad</p>
            </div>
            <div className="overlay">
              <p className="overlay__description">Descripción breve</p>
            </div>
          </div>
          <div className="event__card">
            <img className='event__photo' src={photo}></img>
            <div className='event__info'>
              <h3 className="event__title" onClick=''>No te preocupes por mí, yo me cuido</h3>
              <p className="event__day">Sábado 7 de Diciembre</p>
              <p className="event__address">Birimben 4, Amsterdam</p>
            </div>
            <div className="overlay">
              <p className="overlay__description">Comedia dramática | 
              En un paraje de la patagonia argentina, dos hermanas se acompañan desde siempre. Rosa y Lorenza sobrevivirán en su pequeña comunidad -compuesta por más animales que personas- hasta que sus propios deseos las separen: Rosa en busca de la aventura y Lorenza eligiendo su tierra como su nido eterno.</p>
            </div>
          </div>
          <div className="event__card">
            <img className='event__photo' src={photo}></img>
            <div className='event__info'>
              <h3 className="event__title" onClick=''>Título</h3>
              <p className="event__day">Fecha y hora</p>
              <p className="event__address">Dirección, Ciudad</p>
            </div>
            <div className="overlay">
              <p className="overlay__description">Descripción breve</p>
            </div>
          </div>
          <div className="event__card">
            <img className='event__photo' src={photo}></img>
            <div className='event__info'>
              <h3 className="event__title" onClick=''>Título</h3>
              <p className="event__day">Fecha y hora</p>
              <p className="event__address">Dirección, Ciudad</p>
            </div>
            <div className="overlay">
              <p className="overlay__description">Descripción breve</p>
            </div>
          </div>
         </section>
        

         {/*resultados */}
        <section className="results">
        <div className="event__card">
            <img className='event__photo'></img>
              <h3 className="event__title" onClick=''>Título</h3>
              <p className="event__day">Fecha y hora</p>
              <p className="event__description">Descripción breve</p>
              <p className="event__address">Dirección, Ciudad</p>
          </div>
         </section>
      </main>   
    </div>
  );
}

export default SearchPage