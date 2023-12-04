import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetails from "./components/ItemDetails";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:id" element={<ItemDetails />} />
        <Route
          path="/*"
          element={<Typography variant="h2">Not Found</Typography>}
        />
      </Routes>
    </div>
  );
}

export default App;
