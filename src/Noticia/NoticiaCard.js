import React, { Fragment } from 'react';
import 'materialize-css';
import '../Estilo/Estilo.css';

const Noticia = ({ noticia }) => {
    return (
        <Fragment>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
                <div>
                    {noticia && (
                        <div className=" card medium" >
                            <div className="card-image waves-effect waves-block waves-light imagem-correto"  >
                                <img className="activator"
                                    src={noticia.multimedia?.[0]?.url ? `https://nyt.com/${noticia.multimedia[0].url}` : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'} alt="news-img" />
                            </div>

                            <div className="card-content" >
                                <span className="estilo-texto card-title activator grey-text text-darken-4">
                                    {noticia.title}
                                    <i className="material-icons right">more_vert</i>
                                </span>
                            </div>

                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">
                                    {noticia.title}
                                    <i className="material-icons right">close</i>
                                </span>

                                <p>{noticia.abstract}</p>
                                <p><a href={noticia.url} target="_blank" rel="noreferrer">Acesse a noticia</a></p>
                            </div>
                        </div>
                    )}
                </div>
        </Fragment>
    );
};
export default Noticia;
