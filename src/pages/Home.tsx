import { Grid, Typography } from "@mui/material";
import SearchBox from "../components/SearchBox";
import Results from "../components/Results";
import { useState } from "react";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Grid container spacing={2} flexDirection={"column"}>
      <Typography
        padding={5}
        gutterBottom
        sx={{
          fontSize: "24px",
          fontWeight: "700",
          textTransform: "capitalize",
          color: "rgba(0, 0, 0, 0.33)",
        }}
      >
        Musicolor
      </Typography>
      <SearchBox setSearchResults={setSearchResults} />
      <Results searchResults={searchResults} />
    </Grid>
  );
};

export default Home;
