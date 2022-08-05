import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'


const NavbarPrinc = () => {

    return (
        <Navbar className="navbar justify-content-around" expand="lg">
            <div  className="nav-title-container">
                <Link className="navbar-title" to='/'>
                    CyberX
                </Link>
            </div>
            <div className="nav-btn-container">
                <Link className="btn btn-primary btnLinks" to='/categoria/juegos'>Juegos</Link>
                <Link className="btn btn-primary btnLinks" to='/categoria/consolas'>Consolas</Link>
                <Link className="btn btn-primary btnLinks" to='/categoria/perifericos'>Perifericos</Link>
            </div>
            <CartWidget/>
        </Navbar>
    )
}

export default NavbarPrinc