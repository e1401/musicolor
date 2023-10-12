import { Box, Chip, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Results = () => {
    return (
        <Stack
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='100vh'
            gap={2}
            spacing={1}
        >
            <Paper elevation={3}>
                <Card
                    sx={{
                        maxWidth: '244px',
                    }}
                >
                    <CardMedia
                        component='img'
                        alt='artist cover'
                        height='200px'
                        image='https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5b/8d/47/5b8d47da-71ea-93ab-dffc-733f11332659/825646290703.jpg/100x100bb.jpg'
                    />
                    <Box sx={{ padding: '16px' }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: 'primary.main',
                                fontSize: '14px',
                                fontWeight: 'medium',
                                padding: '0',
                                paddingBottom: '0',
                                '--pb-last': 'unset',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography gutterBottom paddingRight={2}>
                                    artistName
                                </Typography>
                                <Typography gutterBottom>
                                    release date
                                </Typography>
                            </Box>

                            <Typography
                                gutterBottom
                                variant='h6'
                                color='text.primary'
                                sx={{
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    lineHeight: '160%',
                                    letterSpacing: '0.15px',
                                }}
                            >
                                trackName
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Chip label='kind' size='medium' />
                                <Chip
                                    label='primaryGenreName'
                                    size='medium'
                                    variant='filled'
                                />
                            </Box>
                        </CardContent>
                    </Box>
                </Card>
            </Paper>
        </Stack>
    );
};

export default Results;
