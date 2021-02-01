
import React, { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Noticias from './components/Noticia/Noticias.js'
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
//import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
//import Home from './Home.js'


const App = () => {

  const [noticias, setNoticias] = useState([]);

  const getTopArtigos = async (section) => { // recebe a seção
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=AYRHJvV8XkA2jbb2FMhmGFjgRdVUMTDn`);
    setNoticias(res.data.results);
  };
 
  return (
    <div className="fundo">
      <Cabecalho getTopArtigos={getTopArtigos}/>
      
      <Container>
        {/*<Typography color="textPrimary" gutterBottom variant="h2" align="center">*/}
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => (
                <Noticias noticias={noticias} getTopArtigos={getTopArtigos}/>)}
              />
            </Switch>
          </BrowserRouter>
        {/*</Typography>*/}
      </Container>
      
    </div>
  );
};

export default App;
