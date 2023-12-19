import { FC } from 'react'
import { Movie } from '../../types';
import { Grid } from '@mui/material';
import { MovieCard } from '../../components/MovieCard';

type Props = {
  moviesToWatch: Movie[];
}

export const MovieToWatch: FC<Props> = (props) => {
  const { moviesToWatch } = props;
  return (
    <>
      {/*errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>*/}
          
      <Grid container spacing={3}>
          {moviesToWatch.map((movie) => (
            <Grid key={movie.imdbID} item xs={12} sm={6} md={4}>
              <MovieCard
                id={movie.imdbID}
                title={movie.Title}
                image={movie.Poster}
                rating="N/A"
              />
            </Grid>
          ))}
        </Grid>
    </>
  )
}