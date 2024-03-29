import {
  Stack,
  Box,
  TextField,
  InputAdornment,
  Button,
  FormHelperText,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';
import axios from 'axios';
import { API_URL, NUMBER_OF_RESULTS } from '../config/API_URL';

import { useMusicolorStore } from '../hooks/store';

interface SearchBoxProps {
  setSearchResults: React.Dispatch<React.SetStateAction<never[]>>;
}

const SearchBox = ({ setSearchResults }: SearchBoxProps) => {
  const { keyword, setKeyword, removeKeyword } = useMusicolorStore();

  const [input, setInput] = useState<string>(keyword || '');
  const [helperText, setHelperText] = useState('');

  const handleClear = () => {
    setInput('');
    setHelperText('');
    removeKeyword();
    setSearchResults([]);
  };

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getSearchResults = async (searchValue: string) => {
    try {
      const {
        data: { results },
      } = await axios.get(
        API_URL + `?term=${searchValue}&entity=album&limit=${NUMBER_OF_RESULTS}`
      );

      if (results.length === 0) {
        setHelperText('No results match criteria.');
        setSearchResults([]);
        setInput('');
      } else {
        setSearchResults(results);
        setKeyword(searchValue);
        setHelperText('');
      }
    } catch (error) {
      setHelperText('Something went wrong. Please try again.');
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (input.length > 0) {
      getSearchResults(input);
    }
  }, []);

  return (
    <Stack
      flexDirection='row'
      flexWrap='wrap'
      justifyContent='flex-start'
      alignItems='center'
      mx={{ xs: 2, md: 4 }}
      my={4}
      gap={4}
      sx={(theme) => ({
        width: '100%',
        [theme.breakpoints.up('md')]: {
          maxWidth: '90%',
        },
        [theme.breakpoints.up('lg')]: {
          maxWidth: '80%',
        },
        [theme.breakpoints.up('xl')]: {
          maxWidth: '60%',
        },
      })}
    >
      <Box flexGrow={3}>
        <TextField
          aria-describedby='input-search'
          fullWidth
          id='input-search'
          label='Search'
          variant='outlined'
          placeholder='Search for artist or album'
          autoFocus
          type='text'
          value={input}
          onChange={handleInputSearch}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              getSearchResults(input);
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormHelperText
          id='input-search'
          sx={{
            color: 'warning.main',
            fontSize: '14px',
            position: 'absolute',
          }}
        >
          {helperText || ' '}
        </FormHelperText>
      </Box>
      <Stack
        spacing={2}
        direction='row'
        flexWrap={'nowrap'}
        justifyContent='center'
      >
        <Button
          onClick={() => {
            getSearchResults(input);
          }}
          disabled={!input}
          variant='contained'
          color='primary'
          size='large'
          aria-label='search'
        >
          Search
        </Button>
        <Button
          disabled={!input}
          onClick={handleClear}
          variant='outlined'
          color='primary'
          size='large'
          aria-label='clear'
        >
          Clear
        </Button>
      </Stack>
    </Stack>
  );
};

export default SearchBox;
