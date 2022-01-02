import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PreOrderAllItem from "./components/Pages/PreOrderAllItem/PreOrderAllItem";
import BookDetails from "./components/BookDetails/BookDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/preOrderAllItem" element={<PreOrderAllItem />} />
          <Route path="/bookdetails/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
