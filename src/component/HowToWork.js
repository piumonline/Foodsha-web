import React from 'react';
import './HowToWork.css';


const HowToWork = () =>{
    return(
        <div className="Howitwork">
            <h2>How It Work</h2>
            <div className="squire">
                <div className="squire1">
                    <img src={require('../Images/Creative startup2.gif')}  />
                    <h3>Donor lists the extra food</h3>
                    <p>Donor lists extra food with details and location using the app's features.</p>
                </div>
                <div className="squire2">
                    <img src={require('../Images/Messaging service1.gif')}  />
                    <h3>Nearby users get notified</h3>
                    <p>Nearby users receive a notification about request the food, donation or discount.</p>
                </div>
                <div className="squire3">
                    <img src={require('../Images/Scene 1.gif')}  />
                    <h3>Recipient gets the food</h3>
                    <p>The donor and recipient coordinate a meeting through the app to transfer the food.</p>
                </div>
            </div>
        </div>
    )
}

export default HowToWork