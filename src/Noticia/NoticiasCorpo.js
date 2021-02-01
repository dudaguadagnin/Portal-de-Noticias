import React, { Fragment } from 'react';
import NoticiaCard from './NoticiaCard';
import Grid from "@material-ui/core/Grid";
import 'materialize-css';

import '../Estilo/Estilo.css';

function Noticias({ noticias }) {
    return (
        <Fragment>

            <div className="conteudo">
                <div className="top" />
            </div>

            <div >
                <Grid container spacing={6}>
                    {noticias.map((noticia) => (
                        <Grid item xs={12} sm={4} key={noticia.url}>
                            <NoticiaCard noticia={noticia} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Fragment>
    );
}
export default Noticias;
