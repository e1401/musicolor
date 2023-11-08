import { Box, Chip, Card, CardMedia, Paper, Typography } from "@mui/material";
import placeholder_img_artist_cover from "../images/placeholder_img_artist_cover.png";
import { ResultType } from "../types/result";

const ResultCard = ({
  artworkUrl100,
  artistName,
  trackName,
  kind,
  releaseDate,
  primaryGenreName,
}: ResultType) => {
  return (
    <Paper elevation={3}>
      <Card
        sx={{
          height: "100%",
          width: "auto",
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
            }}
          >
            {artistName}
          </Typography>
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "14px",
              fontWeight: "medium",
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
      </Card>
    </Paper>
  );
};

export default ResultCard;
