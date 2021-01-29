
import { Component, Fragment } from 'react';
import Cabecalho from './Cabecalho';
import Home from './Home';

import 'materialize-css/dist/css/materialize.min.css';
import ApiService from './ApiService.js';


class App extends Component {

  state = {
    artigos: [],
  }



  async componentDidMount() {
    const response = await ApiService.get('/technology.json?api-key=AYRHJvV8XkA2jbb2FMhmGFjgRdVUMTDn')
    //console.log(response.data);

    this.setState({ artigos: [...this.state.artigos, response.data] });
  }

  render() {
    const { artigos } = this.state;
    console.log(artigos);
    return (

      <Fragment>
        <Cabecalho />
        <Home />
        <div>
          <h1>listar artigos</h1>
          <ul>
            {artigos.map(artigo => (
              
                <div> {artigo.section}</div>
              

            ))}
          </ul>

        </div>
      </Fragment>


    );
  };



}
export default App;

  //const URL = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=FXoIO1EDFnwTRgHMORwcYfvKFBWzbtvi`;
