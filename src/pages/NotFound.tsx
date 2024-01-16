import { Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import vecteezy_pageUnderConstruction from '../images/vecteezy_pageUnderConstruction.jpg';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Grid
            display='flex'
            justifyContent='center'
            alignItems='center'
            minHeight='100vh'
            marginTop='-20'
        >
            <Container maxWidth='md'>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant='h1'>404</Typography>
                        <Typography variant='h6'>
              The page you’re looking for doesn’t exist.
                        </Typography>

                        <Button
                            aria-labelledby='back-to-search'
                            size='small'
                            color='primary'
                            variant='contained'
                            sx={{
                                marginY: 5,
                            }}
                            onClick={() => navigate('/')}
                        >
              Back to home
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img
                            src={vecteezy_pageUnderConstruction}
                            width={500}
                            height={290}
                            alt='404'
                        />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default NotFound;
