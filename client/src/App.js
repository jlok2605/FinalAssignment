import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import NavBar from "./navbar";
import Home from "./home";
import Book from "./allbooks"

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path = "/books" element = {<Book/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
