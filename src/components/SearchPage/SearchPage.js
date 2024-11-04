import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function SearchPage() {
  return (
    <div className="search__page">
      <Header />
      <Navigation />
      <main className="search__content">
        <h1 className='search__title'>Buscar Eventos de Teatro</h1>
        <form className='search__form'>
          <input
            className='search__input'
            type="text"
            placeholder="Buscar obras de teatro..."
          />
          <button type="submit">Buscar</button>
        </form>

        <Preloader /> 

         
         <p className="error-message">*mensaje de error si existe</p>

         {/*obras destacadas */}
         <section className="featured__section">
          <h2>Obras Destacadas</h2>
          <div className="featured__list">
            <div className="event_card">
              <h3 className="event_title">
                <a className="event_link" href="#" target="_blank" rel="">Título obra</a>
              </h3>
              <p className="event_description">Descripción breve</p>
              <p className="event_city">Ciudad</p>
              <p className="event_day">Fecha y hora</p>
            </div>
          </div>
         </section>
        

         {/*resultados */}
        <div className="results">
          <div className="event__card">
            <h2>Título obra</h2>
            <p className="event_description">Descripción breve</p>
              <p className="event_city">Ciudad</p>
              <p className="event_day">Fecha y hora</p>
            <a className="event_information-link" href="#" target="_blank" rel="">Más información</a>
          </div>
        </div>
      </main>   
      <Footer />
    </div>
  );
}

export default SearchPage