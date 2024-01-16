import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDarkModeStore } from '../hooks/store';
import logo_img from '../images/logo_img.svg';
import logo_negative from '../images/logo_negative.svg';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = () => {
    const theme = useTheme();

    const palette = theme.palette;

    const { isDarkMode, toggleDarkMode } = useDarkModeStore();

    const navigate = useNavigate();
    return (
        <AppBar
            position='static'
            sx={{
                boxShadow: 'none',
                backgroundColor: isDarkMode ? palette.background.paper : 'transparent',
                height: '64px',
                mb: 3,
            }}
        >
            <Toolbar>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    sx={{
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src={isDarkMode ? logo_negative : logo_img}
                        alt='Musicolor logo'
                        style={{
                            maxWidth: '80%',
                            height: 'auto',
                            flex: '1',
                        }}
                        onClick={() => navigate('/')}
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Button color='inherit' onClick={() => toggleDarkMode()}>
                    {isDarkMode ? (
                        <Brightness7Icon />
                    ) : (
                        <Brightness4Icon
                            sx={{
                                color: isDarkMode ? palette.primary.main : palette.primary.dark,
                            }}
                        />
                    )}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
