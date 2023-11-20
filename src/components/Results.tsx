import { Grid } from "@mui/material";
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
      justifyContent="flex-start"
      alignItems="center"
      alignContent="center"
      paddingInlineStart={5}
      paddingInlineEnd={5}
    >
      {searchResults.map((result: ResultType, index) => {
        return (
          <Grid item xs={12} sm={12} md={4} lg={3} key={index}>
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
