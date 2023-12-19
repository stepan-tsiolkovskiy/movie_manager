import React, { FC, useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Box, TextField, Typography, FormControl, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { Movie } from '../../types';

type Props = {
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContainer: FC<Props> = (props) => {
  const { setMovies, setErrorMessage } = props;

  const [searchMovie, setSearchMovie] = useState('');

  const BASE_URL = 'http://www.omdbapi.com';

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchMovie(term);

    try {
      const response = await axios.get(`${BASE_URL}/?s=${term}&apikey=${import.meta.env.VITE_API_KEY}`);

      if (response.data.Response === 'False' && response.data.Error === 'Too many results.') {
        setErrorMessage('Please enter more letters to narrow down the search.');
        setMovies([]);
      } else {
        setErrorMessage('');
        setMovies(response.data.Search || []);
      }
    } catch (error) {
      console.error('Error fetching movie data', error);
    }
  };
  const showClearIcon = searchMovie !== '';

  const handleClick = () => {
    setSearchMovie('');
    setMovies([]);
    setErrorMessage('');
  };

  return (
    <Box width="80%">
      <Typography textAlign="center" variant="h3">
        Welcome to Movies Manager!
      </Typography>

      <Typography textAlign="center" variant="h4">
        Let's watch something incredible
      </Typography>

      <FormControl fullWidth>
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          value={searchMovie}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon ? 'block' : 'none' }}
                onClick={handleClick}
              >
                <ClearIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          inputProps={{
            style: {
              color: 'white',
              borderBottom: '1px solid white',
            },
          }}
        />
      </FormControl>
    </Box>
  );
};
