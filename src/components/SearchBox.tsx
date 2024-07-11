import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import axios from 'axios';
import {
  Stack,
  Box,
  TextField,
  InputAdornment,
  Button,
  FormHelperText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { API_URL, NUMBER_OF_RESULTS, RANDOM_ARTIST_API_URL } from '../config/API_URL';
import { useMusicolorStore } from '../hooks/store';

interface SearchBoxProps {
  setSearchResults: React.Dispatch<React.SetStateAction<never[]>>;
}

interface Song {
  'im:artist': {
    label: string;
  };
}

const SearchBox = ({ setSearchResults }: SearchBoxProps) => {
  const { keyword, setKeyword, removeKeyword } = useMusicolorStore();

  const [input, setInput] = useState<string>(keyword || '');
  const [helperText, setHelperText] = useState<string>('');
  const [randomArtist, setRandomArtist] = useState<string>('');

  const handleClear = () => {
    setInput('');
    setHelperText('');
    removeKeyword();
    setSearchResults([]);
    setRandomArtist('');
  };

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getSearchResults = async (searchValue: string) => {
    try {
      const {
        data: { results },
      } = await axios.get(
        `${API_URL}?term=${searchValue}&entity=album&limit=${NUMBER_OF_RESULTS}`
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

  const getRandomArtist = async () => {
    try {
      const { data } = await axios.get(RANDOM_ARTIST_API_URL);

      const songs: Song[] = data.feed.entry;
      if (!songs || songs.length === 0) {
        console.log('No songs found.');
        return;
      }

      // Extract artist names from the top 10 songs
      const artists = songs.map(song => song['im:artist'].label);

      // Select a random artist
      const randomIndex = Math.floor(Math.random() * artists.length);
      const randomArtist = artists[randomIndex];

      setRandomArtist(randomArtist);

      // Trigger search using the random artist name
      getSearchResults(randomArtist);
    } catch (error) {
      console.error('Something went wrong. Please try again.', error);
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
        <Button
          onClick={getRandomArtist}
          variant='contained'
          color='secondary'
          size='large'
          aria-label='random-artist'
        >
          Random
        </Button>
      </Stack>
    </Stack>
  );
};

export default SearchBox;
