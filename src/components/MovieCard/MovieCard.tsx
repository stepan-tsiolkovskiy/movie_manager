import React from 'react';
import { Card as MuiCard, CardContent, CardMedia, Button, Typography } from '@mui/material';

interface MovieCardProps {
  id: string;
  title: string;
  image: string;
  rating: string;
  onClickWatched?: (movieId: string) => void;
  onClickToWatch?: (movieId: string) => void;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { 
    id, 
    title, 
    image,
    rating, 
    onClickWatched, 
    onClickToWatch 
  } = props;

  return (
    <MuiCard sx={{ width: { xs: '250px' }}}>
      <CardMedia component="img" alt={title} height="400px" image={image} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating}
        </Typography>
        {
          onClickWatched && onClickToWatch && (
            <>
              <Button 
                onClick={() => onClickWatched(id)} 
                variant="contained" 
                color="primary" 
                sx={{ mr: 1, mt: 1 }}
              >
                Add to Watched
              </Button>

              <Button 
                onClick={() => onClickToWatch(id)} 
                variant="contained" 
                color="secondary" 
                sx={{ mt: 1 }}
              >
                Add to Watch
              </Button>
            </>
          )
        }
      </CardContent>
    </MuiCard>
  );
};
