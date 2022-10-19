import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../paths/Home';
import Details from "../paths/Details";

export const Router = () => {
    return (

        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="detail/:id" element={<Details/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
        </BrowserRouter>

    )
}