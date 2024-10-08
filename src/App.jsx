import React from 'react';
import Testimonios from './components/Testimonios.jsx';

// Array con datos de los usuarios
const testimonials = [
    {
        id: 0,
        username: 'Amy Lee',
        city: 'Los Angeles',
        profession: 'Desarrolladora de Aplicaciones Móviles',
        opinion: 'React es increíble, me permite construir aplicaciones dinámicas rápidamente',
        imageUrl: './src/assets/AL.png',
        description: 'Mujer joven sentada delante de una mesa de oficina',
    },
    {
        id: 1,
        username: 'Juan Pérez',
        city: 'Madrid',
        profession: 'Ingeniero software',
        opinion: 'Desde que uso React, el desarrollo frontend es mucho más sencillo y organizado.',
        imageUrl: './src/assets/JP.jpg',
        description: 'Hombre joven en un parque',
    },
    {
        id: 2,
        username: 'James White',
        city: 'Manchester',
        profession: 'Desarrollador Fullstack ',
        opinion: 'React tiene una gran comunidad, lo que facilita la resolución de problemas.',
        imageUrl: './src/assets/JW.jpg',
        imgSize: '150px',
        description: 'Hombre joven sentado detrás de una mesa de oficina ',
    },
    {
        id: 3,
        username: 'Martín Miranda',
        city: 'Ciudad de México',
        profession: 'Desarrollador UI/UX',
        opinion: 'Desde que empecé a usar React, el desarrollo de interfaces dinámicas se ha vuelto mucho más eficiente.',
        imageUrl: './src/assets/mm.jpg',
        description: 'Hombre joven en una oficina de pie, con una carpeta en la mano ',
    },


];

function App() {
    return (
        <>
                {testimonials.map(testimonial => (
                    <Testimonios
                        key={testimonial.id}
                        username={testimonial.username}
                        city={testimonial.city}
                        profession={testimonial.profession}
                        opinion={testimonial.opinion}
                        imageUrl={testimonial.imageUrl}
                        description={testimonial.description}
                    />
                ))}
        </>
    );
}

export default App;
