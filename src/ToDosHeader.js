import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';


function ToDosHeader(props){
    return (
        <header className="App-header">
            <nav>
                <NavLink to="/" activeClassName="active" className="navLinks">Home</NavLink> { '  or  ' }
                <NavLink to="/posts" className="navLinks">Posts</NavLink>
            </nav>
        </header>
        
    )
}

export default ToDosHeader