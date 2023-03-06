import * as React from 'react';
import { 
  Box, 
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@mui/material';
import { PropSection } from '@context/ContextTypes';
import { SearchContext } from '@context/Context';
import {useNavigate} from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const TopicCard = ({ id, title, section, description }: PropSection) => {
  const { state } = React.useContext(SearchContext);
  const navigate = useNavigate();
  const handleRoute = (param: string) => {
    const route = param.toLowerCase().replaceAll(" ", "-");
    navigate(`/${route}`);
  };

  const buttonText = {
    en: "See...",
    es: "Ver..."
  }

  return (
    <Card sx={{ minWidth: 275, maxWidth: 330, height: 245 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {section[state.lang]}
        </Typography>
        <Typography variant="h5" noWrap component="div">
          {bull}{bull} {title[state.lang]} {bull}{bull}
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
            {description[state.lang]}
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ 
          textAlign: "right", 
          padding: "0px 15px 5px 0px", 
        }}>
        <Button 
          variant="contained" 
          size="small"
          onClick={() => handleRoute(title['en'])} 
        >
          {buttonText[state.lang]}
        </Button>
      </Box>
    </Card>
  );
}