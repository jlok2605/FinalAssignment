import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import NavBar from "./navbar";
import Home from "./home";
import Book from "./allbooks"
import SearchBar from './searchbar'
import Signup  from "./signup";
import Login from "./login";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // set a state for the user to keep it
  return (
    <div>
      <NavBar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path = "/books" element = {<Book/>}/>
            <Route path = "/search" element = {<SearchBar/>}/>
            <Route path = "/login" element = {<Login/>} />
            <Route path = "/signup" element = {<Signup/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
