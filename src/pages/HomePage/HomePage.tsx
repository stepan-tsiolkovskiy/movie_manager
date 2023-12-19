import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { Movie } from '../../types';
import { SearchContainer } from '../../components/SearchContainer';
import { MoviesList } from '../../components/MoviesList';

type Props = {
  moviesViewed: Movie[];
  moviesToWatch: Movie[];
  setMoviesViewed: React.Dispatch<React.SetStateAction<Movie[]>>;
  setMoviesToWatch: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export const HomePage: FC<Props> = (props) => {
  const { moviesViewed, moviesToWatch, setMoviesViewed, setMoviesToWatch } = props;
  const [movies, setMovies] = useState<Movie[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleWatched = (movieId: string) => {
    const watchedMovie = movies.find((movie) => movie.imdbID === movieId);
    if (watchedMovie && !isMovieInArray(watchedMovie, moviesViewed)) {
      setMoviesViewed((prevMovies) => [...prevMovies, watchedMovie]);
    }
  };

  const handleToWatch = (movieId: string) => {
    const movieToWatch = movies.find((movie) => movie.imdbID === movieId);
    if (movieToWatch && !isMovieInArray(movieToWatch, moviesToWatch)) {
      setMoviesToWatch((prevMovies) => [...prevMovies, movieToWatch]);
    }
  };

  const isMovieInArray = (movie: Movie, movieArray: Movie[]) => {
    return movieArray.some((m) => m.imdbID === movie.imdbID);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="rgb(66, 65, 65)"
      color="white"
    >
      <SearchContainer 
        setMovies={setMovies}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />

      <MoviesList
        errorMessage={errorMessage}
        movies={movies}
        handleWatched={handleWatched}
        handleToWatch={handleToWatch}
      />
    </Box>
  );
}
