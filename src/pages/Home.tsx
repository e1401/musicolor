import { Typography, Stack } from '@mui/material';

const Home = () => {
    return (
        <Stack
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='100vh'
            gap={2}
        >
            <Typography
                variant='h1'
                component='div'
                gutterBottom
                sx={{
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    background:
                        'linear-gradient(45deg, #FF3366 30%, #FF9933 90%)',
                    color: 'white',
                    boxShadow: '0 3px 5px 2px rgba(255, 51, 102, 0.3)',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: '0 6px 10px 4px rgba(255, 51, 102, 0.3)',
                    },
                }}
            >
                Musicolor
            </Typography>
            <Typography variant='caption' color='text.secondary' gutterBottom>
                Get album cover, get the color, simple as that
            </Typography>
        </Stack>
    );
};

export default Home;
