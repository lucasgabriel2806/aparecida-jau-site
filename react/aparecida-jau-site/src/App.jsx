import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';

import Layout from "./components/Layout";

import Home from './components/Home';

import Paroquia from './components/Paroquia';

import Boletim from './components/Boletim';

import Contato from './components/Contato';

import NoPage from './components/NoPage';

import './App.css';

function App() {

  return (

    <>
        
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />

            <Route path="paroquia" element={<Paroquia />} />

            <Route path="boletim" element={<Boletim />} />

            <Route path="contato" element={<Contato />} />

            <Route path="*" element={<NoPage />} />

          </Route>

        </Routes>
        
      </BrowserRouter>

    </>

  )

}

export default App;
