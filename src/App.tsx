import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchBox from "./pages/SearchBox";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="searchbox" element={<SearchBox />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
