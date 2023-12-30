import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const Footer = () => {
    return (
        <footer className='footer'>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                py={4}
            >
                <Typography variant='caption' color={grey[400]}>
                    Made with ❤️ for colors and music
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;
