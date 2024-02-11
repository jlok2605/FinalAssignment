
import {useEffect, useState} from 'react';
import NavBar from "./navbar";
import allbooks from "./allbooks";
import Home from "./home";
import navbar from "./navbar";
import navbar from "./navbar";

function App (){
<div>
    <NavBar/>
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
</div>

}

export default App;
