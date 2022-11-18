import React from 'react';
import { Routes, Route, redirect as Redirect} from "react-router-dom";

import './app.css';

import Exercice from "./pages/Exercice";
import ExerciceList from "./pages/ExerciceList";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Logout from './pages/Logout';
import Test from './pages/Tests';



function App() {
  return (
    <div className='app'>

      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />}></Route>
        <Route path='/exercice' element={<ExerciceList />}></Route>
        <Route path='/profil' element={<Profil />}></Route>
        <Route path='/exercice/html' element={<Exercice />}></Route>
        <Route path='/exercice/php' element={<Exercice />}></Route>
        <Route path='/exercice/sql' element={<Exercice />}></Route>
        <Route path='/deconnexion' element={<Logout />}></Route>

        <Route path='/test' element={<Test />}></Route>


      </Routes>

    </div>
  );
}

export default App;
