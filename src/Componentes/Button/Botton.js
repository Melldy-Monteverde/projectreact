// import React, { useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
import React from 'react'

const Button = () => {

    // const handleClick = () => {
    //     console.log('Hello world')
    // }

    // useEffect(() =>{
    //     const button = document.getElementById('button')

    //     button.addEventListener('click', handleClick)

    //     return () => {
    //         button.removeEventListener('click', handleClick)
    //     }
    // }, [])

    return (
        <div>
            <button className="btn btn-primary" id="button">Consolas</button>
            <button className="btn btn-primary" id="button">Juegos</button>
            <button className="btn btn-primary" id="button">Perifericos</button>
        </div>
        
    )
}

export default Button 