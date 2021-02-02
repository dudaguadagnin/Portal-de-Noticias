import React, { Fragment } from 'react';
import NoticiaCard from './NoticiaCard';
import Grid from "@material-ui/core/Grid";
import 'materialize-css';
import '../Estilo/Estilo.css';

//MONTA O GRID COM AS NOTICIAS


function Noticias({ noticias }) {
    return (
        <Fragment>

            <div className="conteudo">
                <div className="imagem-ny" />
            </div>

            <div className="responsivo">
                <Grid container spacing={6}>
                    {noticias.map((noticia) => (
                        <Grid item xs={12} sm={6} md={4}> 
                        {/** MD=960px SM=600px XS=0px */}
                            <NoticiaCard noticia={noticia} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Fragment>
    );
}
export default Noticias;
