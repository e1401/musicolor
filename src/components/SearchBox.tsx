import {
  Stack,
  Box,
  TextField,
  InputAdornment,
  Button,
  FormHelperText,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import axios from "axios";
import { API_URL } from "../config/API_URL";

interface SearchBoxProps {
  setSearchResults: React.Dispatch<React.SetStateAction<never[]>>;
}

const SearchBox = ({ setSearchResults }: SearchBoxProps) => {
  const [input, setInput] = useState<string>("");
  const [helperText, setHelperText] = useState("");

  const handleClear = () => {
    setInput("");
  };

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getSearchResults = async (searchValue: string) => {
    try {
      const {
        data: { results },
      } = await axios.get(
        API_URL + `?term=${searchValue}&media=music&limit=10`
      );
      setSearchResults(results);
    } catch (error) {
      setHelperText("No results match criteria.");
    }
  };

  return (
    <Stack
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="center"
      margin={3}
    >
      <Box width="40%" p={2} flex="2 0 400px">
        <TextField
          aria-describedby="input-search"
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
        <FormHelperText
          id="input-search"
          sx={{ color: "warning.main", fontSize: "14px", position: "absolute" }}
        >
          {helperText || " "}
        </FormHelperText>
      </Box>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        flex="1 0 100px"
      >
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
