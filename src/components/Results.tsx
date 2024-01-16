import { Box, Container, Grid, Pagination } from '@mui/material';
import ResultCard from './ResultCard';
import { Result, ResultList } from '../types/result';
import { useState } from 'react';

type ResultsProps = {
  searchResults: ResultList;
};

const Results = ({ searchResults }: ResultsProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Container>
            <Grid container spacing={2} alignContent='center' paddingTop={5}>
                {currentItems.map((result: Result, index) => {
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

            {searchResults.length > 1 && (
                <Box mt={2} display='flex' justifyContent='center'>
                    <Pagination
                        count={Math.ceil(searchResults.length / itemsPerPage)}
                        page={currentPage}
                        onChange={(_, newPage) => setCurrentPage(newPage)}
                        showFirstButton
                        showLastButton
                        color='primary'
                        size='small'
                        sx={{
                            my: '20px',
                        }}
                    />
                </Box>
            )}
        </Container>
    );
};

export default Results;
