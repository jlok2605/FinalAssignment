import { Routes, Route, BrowserRouter } from "react-router-dom";
import React,{useState,useEffect} from "react";
import NavBar from "./navbar";
import Home from "./home";
import Book from "./allbooks"
import SearchBar from './searchbar'
import Signup  from "./signup";
import Login from "./login";
import 'bootstrap/dist/css/bootstrap.min.css';
import BorrowedBooksList from "./borrowedbooks"


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }})
    .then((response) => {
      if (response.ok) {
        response.json().then((user) =>{
          setUser(user)});
      }
    });
  }, []);
  
  function handleLogin(user) {
    console.log("Inside login", user)
    setUser(user);
  }

  function handleLogout() {
    setUser(null);} 
  return (
    <div>
      <NavBar onLogout={handleLogout}/>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/books" element={<Book user={user} />} />
            <Route path = "/search" element = {<SearchBar/>}/>
            <Route path = "/login" element = {<Login onLogin={handleLogin}/>} />
            <Route path = "/signup" element = {<Signup/>}/>
            <Route path = "/me"/>
            <Route path = "/mybooks" element = {<BorrowedBooksList userId={user}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
