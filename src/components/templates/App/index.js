import React from 'react';
import Counter from "../../pages/Counter";
import {Route, Routes} from 'react-router-dom'
import Users from "../../pages/Users";
import Goods from "../../pages/Goods";
import Header from "../../atoms/Header";
import '../../../styles/App.css'

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/users' element={<Users/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/' element={<Goods/>}/>
      </Routes>
    </>
  );
};

export default App;