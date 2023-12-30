import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetails from './components/ItemDetails';

import Header from './components/Header';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/results/:id' element={<ItemDetails />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
