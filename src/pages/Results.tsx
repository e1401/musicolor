import { Box, Chip, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Results = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap={2}
      spacing={1}
    >
      <Paper elevation={3}>
        <Card
          sx={{
            maxWidth: 244,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            alt="artist cover"
            height="100%"
            image="/"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                color: "primary.main",
                fontSize: 34,
                fontWeight: "medium",
                padding: "1rem 0rem 1rem 0",
              }}
            >
              <Typography component="div" gutterBottom paddingRight={2}>
                artistName
              </Typography>
              <Typography component="div" gutterBottom>
                release date
              </Typography>
            </CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="text.secondary"
            >
              trackName
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "3rem 0.5rem 0.5rem 0",
              }}
            >
              <Chip label="kind" size="medium" />
              <Chip label="primaryGenreName" size="medium" />
            </Box>
          </Box>
        </Card>
      </Paper>
    </Stack>
  );
};

export default Results;
