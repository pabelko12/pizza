import React from 'react';
import './App.scss';
import './scss/app.scss'
import {Header} from "./components/Header";

import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {NotFound} from "./pages/NotFound";
import {Routes, Route,} from "react-router-dom";


function App() {


    return (
        <div className="App">
            <div className="wrapper">
                <Header/>

                   <Routes>
                       <Route path='/' element={<Home/>}/>
                       <Route path='/Cart' element={<Cart/>}/>
                       <Route path='*' element={<NotFound/>}/>
                   </Routes>

            </div>
        </div>
    );
}

export default App;
