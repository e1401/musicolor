import {
    Stack,
    Box,
    TextField,
    InputAdornment,
    Button,
    FormHelperText,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config/API_URL';

import { useMusicolorStore } from '../hooks/store';

interface SearchBoxProps {
    setSearchResults: React.Dispatch<React.SetStateAction<never[]>>;
}

const SearchBox = ({ setSearchResults }: SearchBoxProps) => {
    const { keyword, setKeyword, removeKeyword } = useMusicolorStore();

    const [input, setInput] = useState<string>(keyword || '');
    const [helperText, setHelperText] = useState('');

    console.log('keyword is', keyword);

    const handleClear = () => {
        setInput('');
        setHelperText('');
        removeKeyword();
        setSearchResults([]);
    };

    const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const getSearchResults = async (searchValue: string) => {
        try {
            const {
                data: { results },
            } = await axios.get(
                API_URL + `?term=${searchValue}&entity=album&limit=10`
            );
            setSearchResults(results);
            setHelperText('');
            setKeyword(searchValue);
        } catch (error) {
            setHelperText('No results match criteria.');
        }
    };

    //PR COMMENT - useEffect here checks if input is empty, if not, it will call getSearchResults and input is stored in the state, unless cleared byy the user, an empty array means that the useEffect will only run once, when the component is mounted and the value of input is available untill it is refreshed or the tab is closed
    useEffect(() => {
        if (input.length > 0) {
            getSearchResults(input);
        }
    }, []);

    return (
        <Stack
            flexDirection='row'
            flexWrap='wrap'
            justifyContent='flex-start'
            alignItems='center'
            mt={5}
            marginInlineStart={10}
        >
            <Box width='40%' p={2} flex='2 0 400px'>
                <TextField
                    aria-describedby='input-search'
                    fullWidth
                    id='input-search'
                    label='Search'
                    variant='outlined'
                    placeholder='Search for artist or album'
                    autoFocus
                    type='text'
                    value={input}
                    onChange={handleInputSearch}
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === 'Enter') {
                            getSearchResults(input);
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <FormHelperText
                    id='input-search'
                    sx={{
                        color: 'warning.main',
                        fontSize: '14px',
                        position: 'absolute',
                    }}
                >
                    {helperText || ' '}
                </FormHelperText>
            </Box>
            <Stack
                spacing={2}
                direction='row'
                justifyContent='center'
                flex='1 0 100px'
            >
                <Button
                    onClick={() => {
                        getSearchResults(input);
                    }}
                    disabled={!input}
                    variant='contained'
                    color='primary'
                    size='large'
                    aria-label='search'
                >
                    Search
                </Button>
                <Button
                    disabled={!input}
                    onClick={handleClear}
                    variant='outlined'
                    color='primary'
                    size='large'
                    aria-label='clear'
                >
                    Clear
                </Button>
            </Stack>
        </Stack>
    );
};

export default SearchBox;
