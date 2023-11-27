import React from "react";
import CartWidget from './CartWidget';


function Navbar() {
  return (
    <nav>
      <a>
        <img src="logo-nav-olivers.jpg" alt="" />
      </a>
      <form>
        <input type="text" placeholder="Buscar Productos..." />
      </form>
      <div className="sectores">
        <ul className="parrafos">
          <li>
            <a>Productos</a>
          </li>
          <li>
            <a>Cursos</a>
          </li>
          <li>
            <a>Nosotros</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </div>
      <div className="contenedorbtn">
        <button className="button">Ingresar</button>

        <a className="cart">

            <CartWidget />

        </a>
      </div>
    </nav>
  );
}

export default Navbar;
