import { Grid } from '@mui/material';
import ResultCard from './ResultCard';
import { Result, ResultList } from '../types/result';
import { showArtwork } from '../utils/showArtwork';

type ResultsProps = {
    searchResults: ResultList;
};

const Results = ({ searchResults }: ResultsProps) => {
    return (
        <Grid
            container
            spacing={3}
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            alignContent='center'
            paddingInlineStart={5}
            paddingInlineEnd={5}
        >
            {searchResults.map((result: Result, index) => {
                return (
                    <Grid item xs={12} sm={12} md={4} lg={3} key={index}>
                        <ResultCard
                            collectionId={result.collectionId}
                            artistName={result.artistName}
                            trackName={result.trackName}
                            artworkUrl100={result.artworkUrl100}
                            kind={result.kind}
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
