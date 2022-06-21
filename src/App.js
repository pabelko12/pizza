import React from 'react';
import './App.scss';
import './scss/app.scss'
import {Header} from "./components/Header";

import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {NotFound} from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";


function App() {
    const [searchValue, setSearchValue] = React.useState('')

    return (
        <div className="App">
            <div className="wrapper">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>

                <Routes>
                    <Route path='/' element={<Home searchValue={searchValue}/>}/>
                    <Route path='/Cart' element={<Cart/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;
