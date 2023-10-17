import {
  Stack,
  Box,
  TextField,
  InputAdornment,
  Button,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import axios from "axios";
import { API_URL } from "../config/API_URL";

const SearchBox = () => {
  const [value, setValue] = useState<string>("");

  const handleClear = () => {
    setValue("");
  };

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const getSearchResults = async (searchValue: string) => {
    const results = await axios
      .get(API_URL + `?term=${searchValue}&limit=10`)
      .then((res) => {
        return res.data;
      });

    console.log("Results are: ", results);
  };

  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap={2}
    >
      <Box width="40%" p={2}>
        <Link
          component={RouterLink}
          to="/results"
          paddingBottom={2}
          display="block"
        >
          Results
        </Link>
        <TextField
          fullWidth
          id="input-search"
          label="Search"
          variant="outlined"
          placeholder="Search for artist or album"
          autoFocus
          type="text"
          value={value}
          onChange={handleInputSearch}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              getSearchResults(value);
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Stack spacing={2} direction="row">
        <Button
          onClick={() => {
            getSearchResults(value);
          }}
          disabled={!value}
          variant="contained"
          color="primary"
          size="large"
          aria-label="search"
        >
          Search
        </Button>

        <Button
          disabled={!value}
          onClick={handleClear}
          variant="outlined"
          color="primary"
          size="large"
          aria-label="clear"
        >
          Clear
        </Button>
      </Stack>
    </Stack>
  );
};

export default SearchBox;
