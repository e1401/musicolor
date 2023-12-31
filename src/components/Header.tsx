import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo_img from '../images/logo_img.svg';
const Header = () => {
    const navigate = useNavigate();
    return (
        <AppBar
            position='static'
            sx={{
                boxShadow: 'none',
                backgroundColor: 'transparent',
                height: '64px',
                mb: 3,
            }}
        >
            <Toolbar>
                <Box width={{ xs: '40%', md: '50%' }}>
                    <img
                        src={logo_img}
                        alt='Musicolor logo'
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            flex: '1',
                        }}
                        onClick={() => navigate('/')}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
