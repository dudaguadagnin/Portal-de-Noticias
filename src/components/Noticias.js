import React, { useEffect } from 'react';
import Noticia from './Noticia';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';


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
}));

function Noticias({ noticias, getTopArtigos }) {
    const classes = useStyles(); //CLASSE DE ESTILO MATERIAL-UI
    useEffect(() => {
        getTopArtigos('home');
    }, []);

    return (
        <>
            <div className={classes.buttons}>
                <Button onClick={() => { getTopArtigos('science'); }} variant="outlined" >Science</Button>
                <Button onClick={() => { getTopArtigos('technology'); }} variant="outlined" >Technology</Button>
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
