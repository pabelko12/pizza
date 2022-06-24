import React from 'react';
import { decrement, increment } from './redux/slices/filterSlice'
import './scss/app.scss'
import {Header} from "./components/Header";

import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {NotFound} from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";

export const SearchContext = React.createContext()

function App() {
    const [searchValue, setSearchValue] = React.useState('')

    return (

            <div className="wrapper">


                <SearchContext.Provider value={{searchValue,setSearchValue}}>
                    <Header />

                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/Cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </SearchContext.Provider>

            </div>

    );
}

export default App;
