import React, { Fragment } from 'react';
import NoticiaCard from './NoticiaCard';
import Grid from "@material-ui/core/Grid";
import 'materialize-css';

import '../Estilo/Estilo.css';

function Noticias({ noticias }) {
    return (
        <Fragment>

            <div className="conteudo">
                <div className="imagem-ny" />
            </div>

            <div className="responsivo">
                <Grid container spacing={6}>
                    {noticias.map((noticia) => (
                        <Grid className="filho-responsivo" item xs={12} sm={4} key={noticia.url}>
                            <NoticiaCard noticia={noticia} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Fragment>
    );
}
export default Noticias;
