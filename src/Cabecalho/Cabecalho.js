import React, { Fragment, useEffect } from 'react';
import '../Estilo/Estilo.css';
import 'materialize-css';

//CABECALHO DA PAGINA, POSSUI BOTOES NA NAVEGAÇÃO QUE DIRECIONAM PARA AS SEÇOES


function Cabecalho({ getSectionArtigos }) { //RECEBE A SEÇÃO DA PAGINA
  useEffect(() => {
    getSectionArtigos('home'); // A PAGINA INICIA COM A SEÇÃO HOME
  }, []);

  return (
    <Fragment>
      <div class="navbar-fixed">
        <nav >
          <div className="nav-wrapper grey darken-4" >
            <a href="/" className="brand-logo center" style={{ textDecoration: 'none', }}>Portal de Notícias</a>
            <ul className="left hide-on-med-and-down">
              <li><a href="/" style={{ textDecoration: 'none' }}><i class="material-icons">home</i></a></li>
              <li><a  onClick={() => { getSectionArtigos('science'); }} variant="outlined">Science</a></li>
              <li><a onClick={() => { getSectionArtigos('technology'); }} variant="outlined" >Technology</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="botao-escondido">
        <ul>
          <a class="botao waves-effect waves-light btn-small red darken-4" onClick={() => { getSectionArtigos('science'); }} variant="outlined">Science</a>
          <a class="botao waves-effect waves-light btn-small red darken-4" onClick={() => { getSectionArtigos('technology'); }} variant="outlined" >Technology</a>
        </ul>
      </div>
    </Fragment>
  );
}
export default Cabecalho;