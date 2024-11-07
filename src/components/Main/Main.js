import React from 'react'

function Main() {
  return (
    <div className='main' id="main"> 
      <div className='main__info'>
        <h1 className='main_title'>Descubre la magia del teatro en cualquier parte del mundo</h1>
        <p className='main_description'>
        Sabemos que el teatro te apasiona, por eso queremos que vivas la experiencia en cualquier ciudad que visites
        </p>
      </div>
      <div className='button__section'>
        <button className='main_button' type="submit" onClick=''>
          Busca tu obra 
        </button>
      </div>
    </div>
  )
}

export default Main