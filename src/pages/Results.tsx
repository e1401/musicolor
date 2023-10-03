import { Box, Chip, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import placeholder_img_artist_cover from "../images/placeholder_img_artist_cover.png";

const artworkUrl = placeholder_img_artist_cover;

const Results = () => {
  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap={2}
      spacing={1}
    >
      <Paper elevation={3}>
        <Card
          sx={{
            width: "244px",
            height: "376px",
          }}
        >
          <CardMedia
            sx={{ width: "100%" }}
            component="img"
            image={artworkUrl}
            alt="Artist cover"
          />
          <CardContent
            sx={{
              width: "212px",
              height: "142px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              color: "primary.main",
              fontSize: "14px",
              fontWeight: "medium",
            }}
          >
            <Box
              height="71px"
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                alignContent: "flex-start",
              }}
            >
              <Typography gutterBottom paddingRight={2}>
                artistName
              </Typography>
              <Typography gutterBottom>release date</Typography>

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
                trackName
              </Typography>
            </Box>

            <Box
              height="71px"
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                gap: "8px",
              }}
            >
              <Chip label="kind" size="medium" />
              <Chip label="primaryGenreName" size="medium" variant="filled" />
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Stack>
  );
};

export default Results;
