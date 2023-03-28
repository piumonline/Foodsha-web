import React from 'react';
import './Card.css';


const Card = props =>{
    return(
        <div className="Cards">
            <div className="squareGroup">
                <div className="square">
                    <img id="cardImage" src={props.image} width="160px" />
                    <h3>{props.topic}</h3>
                    <h4>{props.kind}</h4>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    )
    
}

export default Card;