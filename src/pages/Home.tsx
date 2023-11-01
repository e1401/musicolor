import { Grid } from '@mui/material';
import SearchBox from '../components/SearchBox';
import Results from '../components/Results';
import { useState } from 'react';
import { ResultType, ResultList } from '../types/result';

const Home = () => {
    const [searchResults, setSearchResults] = useState('');
    const [results, setResults] = useState<ResultList>([]);

    return (
        <Grid container spacing={2} flexDirection={'column'}>
            <SearchBox
                searchResults={searchResults}
                stateUpdate={setSearchResults}
            />
            <Results results={results} stateUpdate={setResults} />
        </Grid>
    );
};

export default Home;
