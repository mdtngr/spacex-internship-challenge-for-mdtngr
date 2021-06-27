import React from 'react'
import logo from '../logo.png'


function Navbar() {
    const navbarStyle = {
        maxWidth: "100%",
        minWidth: "100%",
        top: "0"
    }



    return (
        <div style={navbarStyle}>
            <img src={logo} alt="Spacex logo" />
        </div>
    )
}

export default Navbar
