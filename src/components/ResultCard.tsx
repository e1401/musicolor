import {
  Box,
  Chip,
  Card,
  CardMedia,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import placeholder_img_artist_cover from "../images/placeholder_img_artist_cover.png";
import { Result } from "../types/result";
import { useNavigate } from "react-router-dom";

const ResultCard = ({
  collectionId,
  artworkUrl100,
  artistName,
  trackName,
  kind,
  releaseDate,
  primaryGenreName,
}: Result) => {
  const navigate = useNavigate();

  return (
    <Paper elevation={3}>
      <Card
        sx={{
          height: "100%",
          minWidth: "270px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{ width: "auto", height: "60%", aspectRatio: 1 / 1 }}
          component="img"
          image={artworkUrl100 ? artworkUrl100 : placeholder_img_artist_cover}
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
            flexWrap: "wrap",
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
          <Chip label={kind} size="medium" />
          <Chip label={primaryGenreName} size="medium" variant="filled" />
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          aria-label="get detail view"
          sx={{
            margin: " 10px",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
          // onClick={() => navigate("/details/:id")} // !
          onClick={() => navigate(`/results/${collectionId}`)}
        >
          View Details
        </Button>
      </Card>
    </Paper>
  );
};

export default ResultCard;
