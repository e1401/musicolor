import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchBox from "./pages/SearchBox";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SearchBox" element={<SearchBox />} />
        <Route path="Results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
