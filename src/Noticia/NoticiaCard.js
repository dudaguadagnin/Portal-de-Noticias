import React, { Fragment } from 'react';
import 'materialize-css';
import '../Estilo/Estilo.css';

//MONTA O CARD COM A NOTICIA, IMAGEM, LINK, TITULO E RESUMO


const Noticia = ({ noticia }) => {
    return (
        <Fragment>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

            <div>
                {noticia && (
                    <div className=" card medium " >
                        <div className="card-image waves-effect waves-block waves-light imagem-correto"  >
                            <img className="activator"
                                src={noticia.multimedia?.[0]?.url ? `https://nyt.com/${noticia.multimedia[0].url}` : 'https://f.i.uol.com.br/fotografia/2020/06/10/15918320315ee16ddf0cab9_1591832031_3x2_md.jpg'} />
                        </div>

                        <div className="card-content" >
                            <span className="estilo-texto card-title activator grey-text text-darken-4">
                                {noticia.title}
                                <i className="material-icons right">more_vert</i>
                            </span>
                        </div>

                        <div className="card-reveal red darken-3">
                            <span className="card-title white-text ">
                                {noticia.title}
                                <i className="material-icons right">close</i>
                            </span>

                            <p className="black-text ">{noticia.abstract}</p>
                            <p><a className="amber-text text-lighten-5" 
                            href={noticia.url} target="_blank" rel="noreferrer">Acesse a notícia<i className="material-icons right">link</i></a>
                            
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    );
};
export default Noticia;
