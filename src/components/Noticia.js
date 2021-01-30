import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({

    card: {
        maxWidth: 360,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#e0e0e0",
        height: 550,
    },
    media: {
        height: 280,

    },
    root: {
        paddingTop: 0,
    },

    titulo: {
        paddingTop: 0,
    },
});

const Noticia = ({ noticia }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {noticia && (
                <Card className={classes.card} id={noticia.url}>

                    <CardMedia className={classes.media} component="img" src={noticia.multimedia?.[0]?.url ?
                        `https://nyt.com/${noticia.multimedia[0].url}` : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'}
                        alt="news-img"
                    />

                    <IconButton >
                        <DeleteForeverIcon style={{ color: 'red' }} />
                    </IconButton>

                    <CardContent>
                        <Typography className={classes.titulo} color="text.secunday" variant="h5" >
                            <Link href={noticia.url} target="_blank" rel="noreferrer" color="inherit" style={{ textDecoration: 'none' }}>
                                {noticia.title}
                            </Link>
                        </Typography>
                        <Typography variant="body2" >
                            <br /> {noticia.abstract}
                        </Typography>

                    </CardContent>
                </Card >
            )}
        </div>
    );
};


export default Noticia;
