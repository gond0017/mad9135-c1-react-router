import React from 'react'
import './ProfileCard.css'
import profile_img from './profile_img.png'
import { NavLink } from 'react-router-dom'


function ProfileCard(props){

    return(
        <NavLink to="/userDetails" onClick={() => props.getDetails(props.profile)}>
        <div className="ProfileCard"> 
            <div className="profile-avatar">
                <img src={profile_img} alt="profile-img" />
            </div>
            <div className="card-body">
                <div className="left-align">
                    <p className="Profile-name"> {props.profile.name} <br/>
                        <span className="profile-login"> {props.profile.email} </span>
                    </p>
                    <p className="profile-bio"> {props.profile.website} / {props.profile.phone}  </p>
                </div>
            </div>
        </div>
        </NavLink>
    )

}

export default ProfileCard