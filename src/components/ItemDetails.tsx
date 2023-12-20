import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Item } from "../types/item";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { usePalette } from "react-palette";
import { showArtwork } from "../utils/showArtwork";
import { format } from "date-fns";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);

  const navigate = useNavigate();

  const url = `https://itunes.apple.com/lookup?&entity=album&id=${id}`;

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setItem(data.results[0]);
    };

    fetchItems();
  }, [id, url]);

  const { data: artworkColors } = usePalette(
    showArtwork(item ? item.artworkUrl100 : "")
  );

  return (
    <Stack>
      <Button onClick={() => navigate("/")}></Button>

      {item ? (
        <>
          <Typography variant="h6" marginInlineStart={10}>
            {item.artistName} - {item.collectionName}
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            width="100%"
            gap={4}
            mt={4}
            marginInlineStart={10}
          >
            <Box>
              <img
                src={showArtwork(item.artworkUrl100)}
                alt={item.artistName}
              />
            </Box>
            <Stack direction="column" gap={3}>
              <Box mt={2}>
                <Chip
                  label={item.collectionType}
                  size="small"
                  color="primary"
                />

                <Typography variant="body2" mt={2}>
                  Genre: {item.primaryGenreName}
                </Typography>
                <Typography variant="body2" mt={1}>
                  Release date:
                  {format(new Date(item.releaseDate), "MM/dd/yyyy")}
                </Typography>
              </Box>
              <Typography variant="h6">Colors</Typography>
              {artworkColors
                ? Object.keys(artworkColors).map((color) => (
                    <Stack
                      direction="row"
                      key={color}
                      alignContent="center"
                      alignItems="center"
                      gap={1}
                      marginInlineStart={0.3}
                    >
                      <Box
                        sx={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: artworkColors[color],
                        }}
                      />
                      <Typography variant="body2" color="text">
                        {artworkColors[color]}
                      </Typography>
                    </Stack>
                  ))
                : null}
              <Button
                aria-labelledby="download-as-json"
                size="small"
                variant="contained"
                color="primary"
                text-transform="uppercase"
                disabled
                sx={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                download as json
              </Button>
            </Stack>
          </Stack>
        </>
      ) : null}
      <Box display="flex" alignItems="flex-start" justifyContent="flex-start">
        <Button
          aria-labelledby="back-to-search"
          size="small"
          color="primary"
          variant="text"
          sx={{ marginX: 10, marginY: 4 }}
          onClick={() => navigate("/")}
        >
          Back to search
        </Button>
      </Box>
    </Stack>
  );
};

export default ItemDetails;
