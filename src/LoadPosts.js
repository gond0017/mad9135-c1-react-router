import React from 'react'
import './ProfileCard.css'
import profile_img from './profile_img.png'

function LoadPosts(props){

    return(
        <div className="ProfileCard"  > 
            <div className="profile-avatar">
                <img src={profile_img} alt="profile-img" />
            </div>
            <div className="card-body">
                <div className="left-align">
                    <p className="Profile-name"> {props.post.title} 
                    </p>
                    <p className="profile-bio">{props.post.body}</p>
                </div>

            </div>
        </div>
    )

}

export default LoadPosts