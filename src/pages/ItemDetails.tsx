import { Stack, Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { showArtwork } from '../utils/showArtwork';
import { usePalette } from 'react-palette';

const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState<any>({});

    const navigate = useNavigate();

    const url = `https://itunes.apple.com/lookup?id=${id}`;

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setItem(data.results[0]);
        };

        fetchItems();
    }, [id]);

    const { data: artworkColors } = usePalette(showArtwork(item.artworkUrl100));

    return (
        <Stack direction='row' width='100%' gap={3} mt={3}>
            <Box>
                <img
                    src={showArtwork(item.artworkUrl100)}
                    alt={item.artistName}
                />
            </Box>

            <Stack direction='column' gap={3}>
                <Box>
                    <Typography variant='h5'>{item.artistName}</Typography>
                    <Typography>{item.trackName}</Typography>
                    <Typography>{item.collectionName}</Typography>
                    <Typography>{item.primaryGenreName}</Typography>
                    <Typography>{item.releaseDate}</Typography>
                </Box>
                {artworkColors
                    ? Object.keys(artworkColors).map((color) => (
                          <Stack
                              direction='row'
                              key={color}
                              alignContent='center'
                              alignItems='center'
                              gap={1}
                          >
                              <Box
                                  sx={{
                                      width: '20px',
                                      height: '20px',
                                      borderRadius: '50%',
                                      backgroundColor: artworkColors[color],
                                  }}
                              />
                              <Typography variant='body2'>
                                  {artworkColors[color]}
                              </Typography>
                          </Stack>
                      ))
                    : null}
                <Button onClick={() => navigate('/')}>Back to search</Button>
            </Stack>
        </Stack>
    );
};

export default ItemDetails;
