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
                    <h2>{props.details.name}</h2>
                    <p className="Profile-name">
                        <span className="profile-login">{props.details.website}</span>
                    </p>
                    <p className="profile-bio">{props.details.phone}</p>
                </div>
                <div className="right-align">
                    <Link to="/posts" onClick={() => props.getPost(props.details)} className="load-comment load-btn">Load Posts</Link>
                    <Link to="/userToDos" onClick={() => props.getToDos(props.details)} className="load-posts load-btn">Load To-do</Link>
                </div>

            </div>
        </div>
    )

}

export default UserDetails