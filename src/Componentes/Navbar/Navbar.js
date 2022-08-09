import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'


const NavbarPrinc = () => {

    return (
        <Navbar className="navbar justify-content-around" expand="lg">
            <div  className="nav-title-container">
                <Link className="navbar-title" to='/'>
                    <img src='./images/logoCyberX.jpg' alt='CyberX' className="logoNav"/>
                </Link>
            </div>
            <div className="nav-btn-container">
                <NavLink className="btn btn-primary btnLinks" to='/categoria/juegos'>Juegos</NavLink>
                <NavLink className="btn btn-primary btnLinks" to='/categoria/consolas'>Consolas</NavLink>
                <NavLink className="btn btn-primary btnLinks" to='/categoria/perifericos'>Perifericos</NavLink>
            </div>
            <CartWidget/>
        </Navbar>
    )
}

export default NavbarPrinc