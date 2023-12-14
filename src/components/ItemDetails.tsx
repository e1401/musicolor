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
  }, [id]);

  const {
    data: artworkColors,
    loading,
    error,
  } = usePalette(showArtwork(item ? item.artworkUrl100 : ""));

  useEffect(() => {
    if (loading) console.log("still loading...");
    else if (error) console.error(error);
    else console.log("got colors!", { artworkColors });
  }, [loading]);

  return (
    <Stack>
      <Button onClick={() => navigate("/")} aria-label="Logo"></Button>

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
                  {item.kind}
                </Typography>
                <Typography variant="body2">
                  Genre: {item.primaryGenreName}
                </Typography>
                <Typography variant="body2" mt={2}>
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
      <Button
        aria-labelledby="back-to-search"
        size="small"
        color="primary"
        variant="text"
        sx={{
          marginX: 10,
          maxWidth: "160px",
          marginY: 5,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        onClick={() => navigate("/")}
      >
        Back to search
      </Button>
    </Stack>
  );
};

export default ItemDetails;
