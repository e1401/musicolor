import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <TextField
          label="Search"
         variant="outlined"
          defaultValue="Search for artist or album"
          id="outlined"
          sx={{ m: 1, width: "40ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"
                  sx={{ p: "10px" }}
                  aria-label="search">
                  <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </Box>
  );
};

export default SearchBox;
