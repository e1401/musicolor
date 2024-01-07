import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetails from './components/ItemDetails';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';
import { useDarkModeStore } from './hooks/store';

function App() {
    const { isDarkMode } = useDarkModeStore();

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/results/:id' element={<ItemDetails />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </Layout>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
