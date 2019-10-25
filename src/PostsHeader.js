import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';


function PostsHeader(){
    return (
        <header className="App-header">
            <nav>
                <NavLink to="/" activeClassName="active" className="navLinks">Home</NavLink> { '  or  ' }
                <NavLink to="/userToDos" className="navLinks">To Do</NavLink>
            </nav>
        </header>
        
    )
}

export default PostsHeader