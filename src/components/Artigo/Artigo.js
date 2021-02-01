/*import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        height: 600
    },
    media: {
        height: 300
    },
});

const Artigo = ({ artigo }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            {artigo && (
                <Card className={classes.card} id={artigo._id}>
                    <CardContent>
                        <Typography color="primary" variant="h6">
                            <a href={artigo.web_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                {artigo.headline.main}</a>
                        </Typography>
                        
                        
                    </CardContent>
                </Card >
            )}
        </div>
    );
};


export default Artigo;
*/