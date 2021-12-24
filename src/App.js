import React from 'react';
import Counter from "./features/counter/Counter";
import {Route, Routes} from 'react-router-dom'
import Users from "./features/users/Users";
import Goods from "./features/goods/Goods";
import Header from "./Components/Header/Header";
import './App.css'

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/users' element={<Users />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/' element={<Goods />} />
            </Routes>
        </>
    );
};

export default App;