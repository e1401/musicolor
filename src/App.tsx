import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetails from "./components/ItemDetails";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:id" element={<ItemDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
