import React, { useEffect } from 'react';

function Cabecalho({ getTopArtigos }) {
  useEffect(() => {
    getTopArtigos('home');
  }, []);

  return (
    <div class="navbar-fixed">
      <nav >
        <div className=" nav-wrapper grey darken-4" >
          <a href="/" className="brand-logo center" style={{ textDecoration: 'none', }}>Portal de Noticias</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="/" style={{ textDecoration: 'none' }}><i class="material-icons">home</i></a></li>
            <li><a onClick={() => { getTopArtigos('science'); }} variant="outlined">Science</a></li>
            <li><a onClick={() => { getTopArtigos('technology'); }} variant="outlined" >Technology</a></li>
          </ul>
        </div>
      </nav>
    </div>

  );
}
export default Cabecalho;