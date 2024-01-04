import { Box, CssBaseline, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const Footer = () => {
  return (
    <footer className='footer'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Box py={4} marginTop={'auto'}>
          <Typography variant='caption' color={grey[400]}>
            Made with ❤️ for colors and music
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
