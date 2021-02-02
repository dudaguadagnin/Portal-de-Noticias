
import React, { useState } from 'react';
import Cabecalho from '../Cabecalho/Cabecalho';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NoticiasCorpo from '../Noticia/NoticiasCorpo.js'
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import Container from '@material-ui/core/Container';
import Rodape from '../Rodape/Rodape';

const App = () => {

//DECLARA UMA VARIAVEL STATE, COMO (this.state)
  const [noticias, setNoticias] = useState([]);
 // como se fosse (this.state.noticias  this.setState)

  const getSectionArtigos = async (section) => { // recebe a seção
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=AYRHJvV8XkA2jbb2FMhmGFjgRdVUMTDn`);
    setNoticias(res.data.results);
  };

  return (
    <div className="fundo">
      <Cabecalho getSectionArtigos={getSectionArtigos} />{/**chama e passa a section da navegacao */}
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
              <NoticiasCorpo noticias={noticias}/>)} />
          </Switch>
        </BrowserRouter>
      </Container>
      <Rodape />
    </div>
  );
};

export default App;
