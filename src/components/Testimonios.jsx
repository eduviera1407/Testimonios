import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Grid2, Stack, IconButton } from '@mui/material';

function Testimonio({ nombre, cargo, empresa, testimonio, imagen, alt, megusta }) {
  const [liked, setLiked] = useState(megusta);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <Grid2 item xs={12} sm={6} md={4} lg={3}> 
      <Card sx={{ maxWidth: '100%', margin: '20px' }}>
        <Typography fontSize={{ sx: 12 }} textAlign="center" fontWeight="bold" variant="h6" sx={{ margin: '10px 0' }}>
          Testimonios
        </Typography>
        <CardActionArea>
          <CardMedia
            component="img"
            height="800"
            image={imagen}
            alt={alt} 
          />
         
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cargo} en <strong>{empresa}</strong>
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ marginTop: '10px' }}>
              "{testimonio}"
            </Typography>
         
            <Stack direction="row" sx={{ marginTop: '10px', justifyContent: 'center' }}>
              <IconButton aria-label="me gusta" onClick={handleLikeToggle}>
                {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
              </IconButton>
              <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '5px' }}>
                {liked ? 'Te gusta' : 'Me gusta'}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid2>
  );
}

export default Testimonio;
