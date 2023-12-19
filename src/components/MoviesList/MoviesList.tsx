import { Grid, Paper } from '@mui/material';
import { MovieCard } from '../MovieCard';
import { FC } from 'react';
import { Movie } from '../../types';

type Props = {
  errorMessage: string;
  movies: Movie[];
  handleWatched: (movieId: string) => void;
  handleToWatch: (movieId: string) => void;
};

export const MoviesList: FC<Props> = (props) => {
  const { errorMessage, movies, handleWatched, handleToWatch } = props;

  return (
    <>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      
      <Paper
        elevation={3}
        style={{
          borderRadius: 16,
          width: '90%',
          padding: 16,
          margin: '20px auto',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid key={movie.imdbID} item xs={12} sm={6} md={3}>
              <MovieCard
                id={movie.imdbID}
                title={movie.Title}
                image={movie.Poster}
                rating="N/A"
                onClickWatched={handleWatched}
                onClickToWatch={handleToWatch}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};
