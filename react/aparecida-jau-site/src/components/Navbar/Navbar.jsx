import React from 'react';

import './navbar.css';

function Navbar() {

  return (

    <header>

        <nav className='navbar'>

            <ul>

                <li><a href="#">Início</a></li>

                <li><a href="#">Paróquia</a></li>

                <li><a href="#">Boletim Informativo</a></li>

                <li><a href="#">Contato</a></li>

            </ul>

        </nav>

    </header>

  )

}

export default Navbar;