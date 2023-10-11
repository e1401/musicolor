import { Box, Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import placeholder_img_artist_cover from "../images/placeholder_img_artist_cover.png";
import { mockData } from "../__mocks__/mockData";

const ResultCard = mockData.map((d) => {
  const releaseDate = d.releaseDate.slice(0, 10);
  const artworkCover = d.artworkUrl100
    .slice(1, -1)
    .replace("100x100", "500x500");
  return (
    <>
      <Paper elevation={3}>
        <Card
          sx={{
            width: "244px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{ width: "100%", height: "60%" }}
            component="img"
            image={artworkCover ? artworkCover : placeholder_img_artist_cover}
            alt="Artist cover"
          />

          <Box
            sx={{
              px: 2,
              py: 0,
              height: "25%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              alignContent: "flex-start",
              color: "primary.main",
              fontSize: "14px",
              fontWeight: "medium",
            }}
          >
            <Typography gutterBottom paddingRight={2}>
              {d.artistName}
            </Typography>
            <Typography gutterBottom> {releaseDate}</Typography>

            <Typography
              gutterBottom
              variant="h6"
              color="text.primary"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "160%",
                letterSpacing: "0.15px",
              }}
            >
              {d.trackName}
            </Typography>
          </Box>

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
            <Chip label={d.kind} size="medium" />
            <Chip label={d.primaryGenreName} size="medium" variant="filled" />
          </Box>
        </Card>
      </Paper>
    </>
  );
});

export { ResultCard };
