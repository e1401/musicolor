import { Stack, Box, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState, KeyboardEvent, FormEventHandler } from "react";
import axios from "axios";
import { API_URL } from "../../config/API_URL";
import { ResultType } from "../../types/result";

const SearchBox = () => {
  const [searchResults, setSearchResults] = useState<ResultType[]>([]);

  const [input, setInput] = useState<string>("");

  const handleClear = () => {
    setInput("");
  };

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getSearchResults = async (searchValue: string) => {
    try {
      console.log("Fetching search results...");
      const response = await axios
        .get(API_URL + `?term=${searchValue}&limit=10`)
        .then((response) => {
          setSearchResults(response.data);
          console.log(response.data);
        });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <Stack
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      margin={"10% 0"}
      gap={2}
    >
      <Box width="40%" p={2}>
        <TextField
          fullWidth
          id="input-search"
          label="Search"
          variant="outlined"
          placeholder="Search for artist or album"
          autoFocus
          type="text"
          value={input}
          onChange={handleInputSearch}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              getSearchResults(input);
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
            getSearchResults(input);
          }}
          disabled={!input}
          variant="contained"
          color="primary"
          size="large"
          aria-label="search"
        >
          Search
        </Button>

        <Button
          disabled={!input}
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
