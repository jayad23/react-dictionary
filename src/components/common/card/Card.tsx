import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const TopicCard = () => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 330, height: 245 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Sección
        </Typography>
        <Typography variant="h5" component="div">
          {bull}{bull} Título {bull}{bull}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Nivel
        </Typography>
        <Box 
          component="section"
          sx={{
            width: "100%",
            height: "80px",
            overflow: "scroll"
          }}
          >
          <Typography variant="body2">
            Definición dividida en dos partes, esta es la primera.
            Y esta es la segunda parte de la descripción.
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ 
          textAlign: "right", 
          padding: "0px 15px 5px 0px", 
        }}>
        <Button variant="contained" size="small">Ver...</Button>
      </Box>
    </Card>
  );
}