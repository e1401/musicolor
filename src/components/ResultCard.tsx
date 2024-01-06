import {
    Box,
    Stack,
    Chip,
    Card,
    CardMedia,
    Paper,
    Typography,
    Button,
    CardActions,
} from '@mui/material';
import { Result } from '../types/result';
import { useNavigate } from 'react-router-dom';
import { showArtwork } from '../utils/showArtwork';
import { format } from 'date-fns';

const ResultCard = ({
    collectionId,
    collectionName,
    artworkUrl100,
    artistName,
    collectionType,
    releaseDate,
    primaryGenreName,
}: Result) => {
    const navigate = useNavigate();

    return (
        <Paper elevation={3}>
            <Card
                sx={{
                    height: '100%',
                    minWidth: '270px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <CardMedia
                    sx={{
                        width: 'auto',
                        height: '60%',
                        aspectRatio: 1 / 1,
                        cursor: 'pointer',
                    }}
                    component='img'
                    image={showArtwork(artworkUrl100)}
                    alt='Album cover'
                    onClick={() => navigate(`/results/${collectionId}`)}
                />

                <Stack gap={2} p={2}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                            variant='h5'
                            fontWeight={900}
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {artistName}
                        </Typography>
                        <Typography
                            variant='h6'
                            fontWeight={500}
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {collectionName}
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Release date:{' '}
                        {format(new Date(releaseDate), 'MM/dd/yyyy')}
                    </Typography>

                    <Box display='flex' flexDirection='row' gap={1}>
                        <Chip label={collectionType} size='medium' />
                        <Chip
                            label={primaryGenreName}
                            size='medium'
                            variant='filled'
                        />
                    </Box>

                    {/* An empty box is a good way to add space between elements without adding margin or padding on siblings */}
                    <Box />
                    <CardActions>
                        <Button
                            variant='contained'
                            color='primary'
                            size='medium'
                            aria-label='get colors'
                            onClick={() => navigate(`/results/${collectionId}`)}
                        >
                            get colors
                        </Button>
                    </CardActions>
                </Stack>
            </Card>
        </Paper>
    );
};

export default ResultCard;
