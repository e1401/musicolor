import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box py={4} marginTop={'auto'}>
        <Typography variant='caption' color={grey[400]}>
          Made with ❤️ for colors and music
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
