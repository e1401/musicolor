import { Stack, Box, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";
import axios from "axios";

const SearchBox = () => {
  const [value, setValue] = useState<string>("");

  const handleClear = () => {
    setValue("");
  };

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  async function handleSearch() {
    try {
      const response = await axios.get(
        "https://itunes.apple.com/search?term=",
        {
          params: {
            term: value,
            limit: 10
          },
        }
      );
      const result = response.data;
      console.log(result);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  }

  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
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
          value={value}
          onInput={handleInputSearch}
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
          onClick={handleSearch}
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
