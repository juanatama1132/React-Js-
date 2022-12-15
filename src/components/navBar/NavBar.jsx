import "./NavBar.css";

import {Link} from "react-router-dom";

import { CartWidget } from "../cartWidget/CartWidget";

export const NavBar = () => {

  return (
    <div className="navbar">
      <div className="container-logo">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dtrk5cfbd/image/upload/v1669501745/RJ%20-%20Comision%2034635%20-%20JCA/Black_Autoparts_In_Gear_Auto_Piston_Spark_Plug_And_Wrench_Logo_Design_dk8fw3.png"
          alt=""
        />
      </div>
      <div className="navbar-button">
        <button>MOTOS</button>
        <button>AUTOS</button>
        <button>CAMIONES</button>
      </div>
 
      <CartWidget />
    </div>
  );
};