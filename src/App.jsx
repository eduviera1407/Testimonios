import React from 'react';
import { Grid2, Container } from '@mui/material';
import Testimonio from './components/Testimonios';
import imagenJavier from './assets/imagen.jpg';
import imagenElena from './assets/imagen3.jpg';
import imagenLucia from './assets/imagen4.jpg';
import imagenMarco from './assets/imagen2.jpg';

function App() {
  const testimonios = [
    {
      id: 1,
      nombre: 'Elena Pérez',
      cargo: 'Ingeniera de Software',
      empresa: 'Miryad',
      testimonio: 'Como ingeniera, he visto cómo la tecnología transforma nuestras vidas. La innovación y el desarrollo de nuevas herramientas permiten a las empresas ser más eficientes y a las personas tener un acceso sin precedentes a la información. Estoy emocionada de ver lo que el futuro nos depara en este campo.',
      imagen: imagenElena,
      alt: 'Foto de Elena Pérez',
      megusta: false,
    },
    {
      id: 2,
      nombre: 'Javier Martínez',
      cargo: 'Desarrollador Full Stack',
      empresa: 'SoftTech',
      testimonio: 'La colaboración en proyectos tecnológicos es esencial. Cuando todos aportamos nuestras ideas y habilidades, logramos resultados sorprendentes que pueden cambiar el mundo.',
      imagen: imagenJavier,
      alt: 'Foto de Javier Martínez',
      megusta: true,
    },
    {
      id: 3,
      nombre: 'Lucía Sánchez',
      cargo: 'Analista de Datos',
      empresa: 'DataCorp',
      testimonio: 'En un mundo inundado de información, la capacidad de analizar y visualizar datos se vuelve fundamental. La tecnología nos brinda herramientas para tomar decisiones informadas y efectivas.',
      imagen: imagenLucia,
      alt: 'Foto de Lucía Sánchez',
      megusta: false,
    },
    {
      id: 4,
      nombre: 'Marco González',
      cargo: 'Arquitecto de Software',
      empresa: 'Innovar',
      testimonio: 'Adaptarse a los cambios tecnológicos es crucial. Las herramientas y enfoques evolucionan rápidamente, y aquellos que están dispuestos a aprender y adaptarse siempre estarán un paso adelante.',
      imagen: imagenMarco,
      alt: 'Foto de Marco González',
      megusta: true,
    },
  ];

  return (
    <Container>
      <Grid2 container spacing={3}>
        {testimonios.map((testimonio) => (
          <Testimonio
            key={testimonio.id}
            nombre={testimonio.nombre}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
            imagen={testimonio.imagen}
            alt={testimonio.alt}
            megusta={testimonio.megusta}
          />
        ))}
      </Grid2>
    </Container>
  );
}

export default App;
