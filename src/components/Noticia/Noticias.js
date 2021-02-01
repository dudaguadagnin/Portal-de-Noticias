import React, { useEffect } from 'react';
import Noticia from './Noticia';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import '../../Carrousel.css';

const useStyles = makeStyles((theme) => ({ //ESTILO MATERIAL-UI
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },

    },
    inicio: {
        paddingBottom: 60,
        fontSize: 10,
    },
}));

function Noticias({ noticias, getTopArtigos }) {
    const classes = useStyles(); //CLASSE DE ESTILO MATERIAL-UI
    useEffect(() => {

        getTopArtigos('home');

    }, []);

    return (
        <> 

            <div className={classes.inicio} >
                <h3>Acesse conteudos sobre</h3>
                <div className={classes.buttons}>

                    <Button onClick={() => { getTopArtigos('science'); }} variant="outlined" >Science</Button>
                    <Button onClick={() => { getTopArtigos('technology'); }} variant="outlined" >Technology</Button>

                </div>
            </div>
            <div className={classes.root} >
                <Grid container spacing={6}>
                    {noticias.map((noticia) => (
                        <Grid item xs={12} sm={4} key={noticia.url}>
                            <Noticia noticia={noticia} />
                           
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}
export default Noticias;
