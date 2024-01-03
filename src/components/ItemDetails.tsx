import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Item } from "../types/item";
import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { usePalette } from "react-palette";
import { showArtwork } from "../utils/showArtwork";
import { format } from "date-fns";
import { DETAILS_URL } from "../config/API_URL";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);

  const navigate = useNavigate();

  const url = `${DETAILS_URL}?id=${id}`;

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

  const downloadJson = () => {
    const json = JSON.stringify(artworkColors);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = `${item?.artistName} - ${item?.collectionName} - color palette.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={8}
      mx={{ xs: 2, md: 4 }}
      my={4}
    >
      <Stack flexDirection={{ xs: "column", md: "row" }} gap={2}>
        {item ? (
          <Box>
            {item ? (
              <Typography variant="h6" mb={3}>
                {item.artistName} - {item.collectionName}
              </Typography>
            ) : null}
            <Stack gap={2} direction={{ xs: "column", md: "row" }}>
              <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
                <img
                  src={showArtwork(item.artworkUrl100)}
                  alt={item.artistName}
                  style={{
                    maxWidth: "500px",
                    height: "auto",
                    flex: "1",
                  }}
                />
              </Box>
              <Box>
                {item ? (
                  <Box
                    display="flex"
                    flexDirection="column"
                    maxWidth="500px"
                    height="auto"
                    flex="1"
                    gap={2}
                  >
                    <Chip
                      label={item.collectionType}
                      size="small"
                      color="primary"
                      sx={{
                        width: "fit-content",
                      }}
                    />

                    <Typography variant="body2">
                      Genre: {item.primaryGenreName}
                    </Typography>
                    <Typography variant="body2">
                      Release date:{" "}
                      {format(new Date(item.releaseDate), "MM/dd/yyyy")}
                    </Typography>
                    <Divider />
                    <Typography variant="h6">Colors</Typography>
                    {artworkColors
                      ? Object.keys(artworkColors).map((color) => (
                          <Stack
                            direction="row"
                            key={color}
                            alignContent="center"
                            alignItems="center"
                            gap={1}
                            marginInlineStart={1}
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
                    <Divider />
                    <Typography variant="caption">
                      Download color scheme and import to Figma or any other
                      design tool that supports json for colors
                    </Typography>
                    <Box display="flex" gap={4}>
                      <Button
                        aria-labelledby="download"
                        size="small"
                        variant="contained"
                        sx={{
                          width: {
                            xs: "40%",
                            md: "fit-content",
                          },
                        }}
                        onClick={() => downloadJson()}
                      >
                        download
                      </Button>
                      <Button
                        aria-labelledby="back-to-search"
                        size="small"
                        variant="text"
                        sx={{
                          width: {
                            xs: "40%",
                            md: "fit-content",
                          },
                        }}
                        onClick={() => navigate("/")}
                      >
                        Back to search
                      </Button>
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
};

export default ItemDetails;
