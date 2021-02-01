
import React, { useState } from 'react';
import Cabecalho from '../Cabecalho/Cabecalho';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Noticias from '../Noticia/NoticiasCorpo.js'
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import Container from '@material-ui/core/Container';

const App = () => {

  const [noticias, setNoticias] = useState([]);

  const getTopArtigos = async (section) => { // recebe a seção
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=AYRHJvV8XkA2jbb2FMhmGFjgRdVUMTDn`);
    setNoticias(res.data.results);
  };

  return (
    <div className="fundo">
      <Cabecalho getTopArtigos={getTopArtigos} />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
              <Noticias noticias={noticias} getTopArtigos={getTopArtigos} />)} />
          </Switch>
        </BrowserRouter>
      </Container>

    </div>
  );
};

export default App;
