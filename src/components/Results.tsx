import { Box, FormHelperText, Grid, Stack } from '@mui/material';
import ResultCard from './ResultCard';
import { ResultType, ResultList } from '../types/result';

const Results = ({ results }: ResultType) => {
    return (
        <Stack
            flexDirection='row'
            flexWrap='wrap'
            justifyContent='flex-start'
            alignItems='flex-start'
            align-content='stretch'
            height='100vh'
        >
            <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 4 }}
                gap={2}
                justifyContent='center'
                alignItems='center'
                direction='row'
            >
                {results.map((result: ResultType, index: any) => {
                    return (
                        <Box key={index}>
                            <ResultCard
                                artistName={result.artistName}
                                trackName={result.trackName}
                                artworkUrl100={result.artworkUrl100.replace(
                                    '100x100',
                                    '500x500'
                                )}
                                kind={result.kind}
                                releaseDate={result.releaseDate.slice(0, 10)}
                                primaryGenreName={result.primaryGenreName}
                            />
                        </Box>
                    );
                })}
            </Grid>
        </Stack>
    );
};

export default Results;
