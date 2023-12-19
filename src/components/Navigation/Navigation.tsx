import { Box, Typography } from '@mui/material'
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../types';

type Props = {
  moviesViewed: Movie[];
  moviesToWatch: Movie[];
}

export const Navigation: FC<Props> = () => {
  const navigate = useNavigate();

  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center"
      width="96%" 
      height="40px"
      padding="0 30px"
      >
      <Typography 
        variant='h6' 
        onClick={() => navigate('/')}
        color='white'
        >
          MOVIES
      </Typography>
      
      <Box display="flex" alignItems="center" gap="40px">
        <Typography onClick={() => navigate('/wached')} color='white'>
          Watched movies
        </Typography>
        <Typography onClick={() => navigate('/towatch')} color='white'>
          Movies to watch
        </Typography>
      </Box>
    </Box>
  )
}