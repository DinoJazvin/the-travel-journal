import React from "react";

export default function Card(props){
    return (
        <div>
            
            <div className="main-content">
                <img src={props.items.img}/>
                <div className="location-info">
                    <h4>{props.items.location}</h4>
                    <h1>{props.items.title}</h1>
                    <p>{props.items.description}</p>
                </div>
            </div>
        </div>
        

    )
}