import React, { Fragment, useEffect } from 'react';
import '../Estilo/Estilo.css';

//CABECALHO DA PAGINA, POSSUI BOTOES NA NAVEGAÇÃO QUE DIRECIONAM PARA AS SEÇOES


function Cabecalho({ getTopArtigos }) { //RECEBE A SEÇÃO DA PAGINA
  useEffect(() => {
    getTopArtigos('home'); // A PAGINA INICIA COM A SEÇÃO HOME
  }, []);

  return (
    <Fragment>
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
        <div class="botao-escondido">
          <ul>
            <a class="botao waves-effect waves-light btn-small red darken-4" onClick={() => { getTopArtigos('science'); }} variant="outlined">Science</a>
            <a class="botao waves-effect waves-light btn-small red darken-4" onClick={() => { getTopArtigos('technology'); }} variant="outlined" >Technology</a>
          </ul>
        </div>
    </Fragment>
  );
}
export default Cabecalho;