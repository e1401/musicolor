import { Grid } from "@mui/material";
import SearchBox from "../components/SearchBox";
import Results from "../components/Results";
import { useState } from "react";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Grid container spacing={2} flexDirection={"column"}>
      <SearchBox setSearchResults={setSearchResults} />
      <Results searchResults={searchResults} />
    </Grid>
  );
};

export default Home;
