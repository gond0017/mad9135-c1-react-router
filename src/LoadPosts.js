import React from 'react'
import './ProfileCard.css'

function LoadPosts(props){

    return(
        <div className="ProfileCard"  > 
            <div className="card-body">
                <div className="left-align">
                    <h3>{props.post.title} </h3>
                    
                    <p className="profile-bio">{props.post.body}</p>
                </div>

            </div>
        </div>
    )

}

export default LoadPosts