import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, CardMedia, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Testimonio = ({ username, city, profession, opinion, imageUrl, description }) => {
    const [like, setLike] = useState(false);


    // Cambiar el estado del like
    const toggleLike = () => {
        setLike(!like);
    };

    return (
        <Card style={{ maxWidth: 600, margin: '1em auto' }}>
            {/* Imagen */}
            <CardMedia
                component="img"
                height="400"
                image={imageUrl}
                alt={description}
                style={{ objectFit: 'cover' }}
            />
            <CardContent style={{ textAlign: 'center' }}>
                {/* Nombre y Ciudad */}
                <Typography variant="h5" component="div" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    {username} en {city}
                </Typography>

                {/* Profesión */}
                <Typography variant="h6" color="textSecondary">
                    {profession}
                </Typography>

                {/* Descripción */}
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '1em' }}>
                    {opinion}
                </Typography>

                {/* Me gusta */}
                <Grid container justifyContent="flex-start" alignItems="center" style={{ marginTop: '1em' }}>
                    <IconButton onClick={toggleLike} aria-label="me gusta">
                        {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                    </IconButton>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Testimonio;
