import { Stack, Box, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap={2}
    >
      <Box width="50%" p={2}>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          placeholder="Search for artist or album"
          id="search-field"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" aria-label="search">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          size="large"
          aria-label="search"
        >
          Search
        </Button>
        <Button
          disabled
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
