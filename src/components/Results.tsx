import { Grid } from '@mui/material';
import ResultCard from './ResultCard';
import { Result, ResultList } from '../types/result';

type ResultsProps = {
  searchResults: ResultList;
};

const Results = ({ searchResults }: ResultsProps) => {
  return (
    <Grid container spacing={2} alignContent='center' paddingTop={5}>
      {searchResults.map((result: Result, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} gap={1} key={index}>
            <ResultCard
              collectionId={result.collectionId}
              collectionName={result.collectionName}
              artistName={result.artistName}
              trackName={result.trackName}
              artworkUrl100={result.artworkUrl100}
              collectionType={result.collectionType}
              releaseDate={result.releaseDate.slice(0, 10)}
              primaryGenreName={result.primaryGenreName}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Results;
