import { Box, Grid, Stack } from "@mui/material";
import ResultCard from "./ResultCard";
import { ResultType, ResultList } from "../types/result";

type ResultsProps = {
  searchResults: ResultList;
};

const Results = ({ searchResults }: ResultsProps) => {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      alignContent="center"
      paddingInlineStart={5}
      paddingInlineEnd={5}
    >
      {searchResults.map((result: ResultType, index) => {
        return (
          <Grid item xs={8} md={3} key={index}>
            <ResultCard
              artistName={result.artistName}
              trackName={result.trackName}
              artworkUrl100={result.artworkUrl100.replace("100x100", "500x500")}
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
