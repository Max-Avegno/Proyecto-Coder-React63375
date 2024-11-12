import React from "react";
import CartWidget from "./cartWidget";

function NavBar (){

    return  <ul>
        <li><a href="#">Carrito</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Quienes somos?</a></li>
        <li><a href="#">Contacto</a></li>
        <CartWidget/>

    </ul>;
   

}

export default NavBar;