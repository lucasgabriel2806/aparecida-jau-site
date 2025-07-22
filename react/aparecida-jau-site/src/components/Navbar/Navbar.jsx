import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../Layout";

import Inicio from '../Inicio';

import Paroquia from '../Paroquia';

import Boletim from '../Boletim';

import Contato from '../Contato';

import NoPage from '../NoPage';

import './navbar.css';

function Navbar() {

  return (

    <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />}>

            <Route index element={<Inicio />} />

            <Route path="paroquia" element={<Paroquia />} />

            <Route path="boletim" element={<Boletim />} />

            <Route path="contato" element={<Contato />} />

            <Route path="*" element={<NoPage />} />

          </Route>

        </Routes>
        
    </BrowserRouter>

  )

}

export default Navbar;