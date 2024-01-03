import {
  Box,
  Chip,
  Card,
  CardMedia,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { Result } from "../types/result";
import { useNavigate } from "react-router-dom";
import { showArtwork } from "../utils/showArtwork";

const ResultCard = ({
  collectionId,
  artworkUrl100,
  artistName,
  trackName,
  collectionType,
  releaseDate,
  primaryGenreName,
}: Result) => {
  const navigate = useNavigate();

  return (
    <Paper elevation={3}>
      <Card
        sx={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{ width: "auto", height: "60%", aspectRatio: 1 / 1 }}
          component="img"
          image={showArtwork(artworkUrl100)}
          alt="Artist cover"
        />

        <Box
          sx={{
            px: 2,
            paddingTop: "16px",
            paddingBottom: "0",
            height: "25%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            alignContent: "flex-start",
          }}
        >
          <Typography
            paddingRight={2}
            sx={{
              color: "primary.main",
              fontSize: "14px",
              fontWeight: "medium",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {artistName}
          </Typography>

          <Typography
            sx={{
              color: "primary.main",
              fontSize: "14px",
              fontWeight: "medium",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {releaseDate}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          paddingInlineStart="16px"
          color="text.primary"
          sx={{
            fontWeight: 500,
            lineHeight: "160%",
            letterSpacing: "0.15px",
            marginBottom: "20px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {trackName}
        </Typography>

        <Box
          gap={1}
          sx={{
            p: 2,
            height: "25%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "flex-end",
          }}
        >
          <Chip label={collectionType} size="medium" />
          <Chip label={primaryGenreName} size="medium" variant="filled" />
        </Box>
        <Box
          flexDirection="row"
          justifyContent="flex-start"
          flexWrap="nowrap"
          maxWidth="50%"
          margin=" 10px"
        >
          <Button
            variant="contained"
            color="primary"
            size="medium"
            aria-label="get detail view"
            onClick={() => navigate(`/results/${collectionId}`)}
          >
            View Details
          </Button>
        </Box>
      </Card>
    </Paper>
  );
};

export default ResultCard;
