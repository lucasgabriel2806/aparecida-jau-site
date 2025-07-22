import { Outlet, Link } from "react-router-dom";

import './layout.css';

const Layout = () => {

  return (

    <>

      <nav className="navbar">

        <ul>

          <li>

            <Link to="/">Inicio</Link>

          </li>

          <li>

            <Link to="/paroquia">Paroquia</Link>

          </li>

          <li>

            <Link to="/boletim">Boletim</Link>

          </li>

          <li>

            <Link to="/contato">Contato</Link>

          </li>

        </ul>

      </nav>

      <Outlet />

    </>

  )

};

export default Layout;