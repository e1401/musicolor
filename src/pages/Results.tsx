import { Stack } from "@mui/material";
import ResultCard from "../features/ResultCard";

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
      <ResultCard />
    </Stack>
  );
};

export default Results;
