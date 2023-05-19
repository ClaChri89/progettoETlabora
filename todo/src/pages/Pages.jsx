import Home from "./Form";
import { Form, Route, Routes } from "react-router-dom";

import Categorie from "./Categorie";
import Singole from "./Singole";
import Login from "./Login";





function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/form' element={<Form/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        
    </Routes>
  );
}

export default Pages;