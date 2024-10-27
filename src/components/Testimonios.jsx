import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, CardMedia, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { MyFavourite } from "milibreria";//Componente personalizado del corazon
import { MyFavouriteBorder } from "milibreria";//Borde para el componente personalizado del corazon
import { MyButton } from "milibreria";//Boton personalizado
import { AlondraHS } from "milibreria";//SnackBar personalizado
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const Testimonio = ({ username, city, profession, opinion, imageUrl, description }) => {
    //Estado del like(en un principio esta false ya que no queremos que esté marcado al abrir la app)
    const [like, setLike] = useState(false);

    //Estado del snackbar(componente AlondraHS, que esta cerrado al abrir la app)
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    //Estado del mensaje del snackbar(vacío ya que dependiendo de si se da like o se quita saldra un mensaje y otro)
    const [snackbarMessage, setSnackbarMessage] = useState("");

    //Estado del color del snackbar(vacío ya que dependiendo de si se da like o se quita sera rojo o verde)
    const [snackbarColor, setSnackbarColor] = useState("");

    //Estado del icono del snackbar(vacío ya que dependiendo de si se da like o se quita sera happy o sad)
    const [snackbarIcon, setSnackbarIcon] = useState("");

    // Estado del diálogo modal(false ya que no queremos que se vea el mensaje al abrir la app)
    const [dialogOpen, setDialogOpen] = useState(false);

    // Cambio del estado del like y mostrar el snackbar
    const handleClickLike = () => {
        const addlike = !like;
        setLike(addlike);
        setSnackbarOpen(true);

        if (addlike) {
            setSnackbarMessage("Has añadido tu me gusta");
            setSnackbarColor("#DAF7A6");
            setSnackbarIcon("happy");
        } else {
            setSnackbarMessage("Has eliminado tu me gusta");
            setSnackbarColor("#FF5733");
            setSnackbarIcon("sad");
        }

        // Abre el Snackbar y lo cierra después de 1 segundo
        setSnackbarOpen(true);
        setTimeout(() => {
            setSnackbarOpen(false);
        }, 1000);
    };


    // Abrir el diálogo modal
    const handleClickOpen = () => {
        setDialogOpen(true);
    };

    // Cerrar el diálogo modal
    const handleClose = () => {
        setDialogOpen(false);
    };

    // Elegir por que plataforma se comparte y mostrar en la consola del navegador
    const handleShare = (platform) => {
        console.log(`Enviando por ${platform} ...`);
        handleClose();
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

                {/* Me gusta personalizado y boton para compartir personalizado */}
                <Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: '1em' }}>
                    <IconButton onClick={handleClickLike} aria-label="me gusta">
                        {like ? <MyFavourite color="info" /> : <MyFavouriteBorder color="info" />}
                    </IconButton>
                    <MyButton
                        text="Compartir esta publicación"
                        txtcolor="black"
                        bgcolor="#33a7ff"
                        bordercolor="#33a7ff"
                        borderwidth="1px"
                        hovertxtcolor="white"
                        hoverbgcolor="darkblue"
                        onClick={handleClickOpen} // Abrir diálogo al hacer clic
                    />
                </Grid>
            </CardContent>

            {/* Snackbar personalizado */}
            {snackbarOpen && (
                <AlondraHS
                    message={snackbarMessage}
                    messagecolor="black"
                    color={snackbarColor}
                    icon={snackbarIcon}
                />
            )}


            {/* Diálogo modal */}
            <Dialog
                open={dialogOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Compartir"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿A qué plataforma quieres compartir?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleShare('WhatsApp')} color="primary">
                        <WhatsAppIcon />
                    </Button>
                    <Button onClick={() => handleShare('Telegram')} color="primary">
                        <TelegramIcon />
                    </Button>
                </DialogActions>
            </Dialog>

        </Card>
    );

};

export default Testimonio;
