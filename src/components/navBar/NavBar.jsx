import { CartWidget } from '../cartwidget/CartWidget'
import './NavBar.css'
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';

export const NavBar = ()=>{

    return(
        <div className='NavBar'>
            <div className='navbar_logo'>
            <Link to="/" >
                <img src="https://res.cloudinary.com/dtrk5cfbd/image/upload/v1669501745/RJ%20-%20Comision%2034635%20-%20JCA/Black_Autoparts_In_Gear_Auto_Piston_Spark_Plug_And_Wrench_Logo_Design_dk8fw3.png" alt="logo" />
            </Link>
            </div>
            <Button variant="contained">
            <Link className="navbar-item" to="/" >Ver todo </Link>
            </Button>
            <Button variant="contained">
            <Link to="/category/autopartes-autos" >AUTOS</Link>
            </Button>
            <Button variant="contained">
            <Link to="/category/autopartes-camiones" >CAMIONES</Link>
            </Button>
            <Button variant="contained">
            <Link to="/category/autopartes-motos" >MOTOS</Link>
            </Button>
            <div>
                <CartWidget/>
            </div>
        </div>
    )
}
