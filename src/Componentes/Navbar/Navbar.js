import './Navbar.css'
import Button from '../Button/Botton'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    const handleClick = () => {
        console.log('Este click se autodestruira pronto XD')
    }
    return (
        <nav className ="Navbar">
            <div  className="navbar_title-container">
                <h1 className="navbar-title">CyberX</h1>
            </div>
            <div className="navbar_btn-container">
                <Button handleClick={handleClick}>Juegos</Button>
                <Button handleClick={handleClick}>Consolas</Button>
                <Button handleClick={handleClick}>Perifericos</Button>
                <Button handleClick={handleClick}>Home</Button>
                <Button handleClick={handleClick}>login</Button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar