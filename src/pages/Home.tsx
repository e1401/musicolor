import { Stack } from '@mui/material';
import SearchBox from '../components/SearchBox';
import Results from '../components/Results';
import { useState } from 'react';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Stack
      display='flex'
      flexDirection='row'
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      mx={{ xs: 2, md: 4 }}
      my={4}
    >
      <SearchBox setSearchResults={setSearchResults} />
      <Results searchResults={searchResults} />
    </Stack>
  );
};

export default Home;
