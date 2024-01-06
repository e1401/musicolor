import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetails from './components/ItemDetails';

import Header from './components/Header';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';
import Layout from './components/Layout';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
