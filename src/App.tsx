// App.jsx
import { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Movie } from './types';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MovieToWatch } from './pages/MovieToWatch';
import { MovieViewed } from './pages/MovieViewed';
import { Box } from '@mui/material';

function App() {
  const [moviesViewed, setMoviesViewed] = useState<Movie[]>([]);
  const [moviesToWatch, setMoviesToWatch] = useState<Movie[]>([]);

  return (
    <>
      <Navigation 
        moviesViewed={moviesViewed}
        moviesToWatch={moviesToWatch}
      />

      <Box style={{ paddingTop: "70px"}}>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                moviesViewed={moviesViewed}
                moviesToWatch={moviesToWatch}
                setMoviesViewed={setMoviesViewed}
                setMoviesToWatch={setMoviesToWatch}
              />
            } 
          />
          
          <Route path="/towatch" element={<MovieToWatch moviesToWatch={moviesToWatch} />} />

          <Route path="/wached" element={<MovieViewed moviesViewed={moviesViewed} />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
