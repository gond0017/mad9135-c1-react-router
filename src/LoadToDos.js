import React from 'react'
import './ProfileCard.css'

function LoadToDos(props){
    let status = ""
    if(props.todos.completed === true){
        status = "Done!"
    }else{
        status = "Not Done Yet!"
    }
    return(
        <div className="ProfileCard"  > 
            <div className="card-body">
                <div className="left-align">
                    <h3>{props.todos.title} </h3>
                    
                    <p className="profile-bio">{ status }</p>
                </div>

            </div>
        </div>
    )

}

export default LoadToDos