import { Box, Grid, Stack, Typography } from "@mui/material";
import ResultCard from "../features/ResultCard";
import { mockData } from "../__mocks__/mockData";
import { ResultType } from "../types/result";

const Results = () => {
  const results: ResultType[] = mockData;
  return (
    <Stack
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="flex-start"
      align-content="stretch"
      height="100vh"
    >
      <Typography variant="h2" color="initial" paddingInlineStart={6}>
        Results
      </Typography>
      <Grid
        container
        spacing={2}
        gap={2}
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        {results.map((result: ResultType, index) => {
          return (
            <Box key={index}>
              <ResultCard
                artistName={result.artistName}
                trackName={result.trackName}
                artworkUrl100={result.artworkUrl100
                  .slice(1, -1)
                  .replace("100x100", "500x500")}
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
