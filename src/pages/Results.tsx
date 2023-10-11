import { Grid } from "@mui/material";
import { ResultCard } from "../features/ResultCard";

const Results = () => {
  return (
    <Grid
      container
      spacing={2}
      columns={2}
      justifyContent="center"
      alignItems="center"
      direction="row"
    >
      <Grid item xs="auto">
        {ResultCard}
      </Grid>
    </Grid>
  );
};

export default Results;
