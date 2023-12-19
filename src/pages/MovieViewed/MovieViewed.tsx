import { FC } from 'react'
import { Movie } from '../../types';
import { Grid } from '@mui/material';
import { MovieCard } from '../../components/MovieCard';

type Props = {
  moviesViewed: Movie[];
}

export const MovieViewed: FC<Props> = (props) => {
  const { moviesViewed } = props;
  return (
    <>
      {/*errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>*/}
          
      <Grid container spacing={3}>
          {moviesViewed.map((movie) => (
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