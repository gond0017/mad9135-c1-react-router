import React from 'react'
import './ProfileCard.css'
import profile_img from './profile_img.png'
import { Link } from 'react-router-dom'

function UserDetails(props){

    return(
        <div className="ProfileCard"  > 
            <div className="profile-avatar">
                <img src={profile_img} alt="profile-img" />
            </div>
            <div className="card-body">
                <div className="left-align">
                    <p className="Profile-name"> {props.details.website} <br/>
                        <span className="profile-login">{props.details.name}</span>
                    </p>
                    <p className="profile-bio">{props.details.phone}</p>
                </div>
                <div className="right-align">
                    <Link to="/posts" onClick={() => props.getPost(props.details.id)} className="load-comment load-btn">Load Comments</Link>
                    <Link to="/to-do" className="load-posts load-btn">To-do</Link>
                </div>

            </div>
        </div>
    )

}

export default UserDetails