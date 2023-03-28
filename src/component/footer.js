import React from 'react';
import '../component/footer.css';

const Footer = () =>{
    return(
        <div className="Footer">
            <div className="FooterGroup">
                <div className="Group1">
                    <img src={require('../Images/FOODSHA [Recovered]-03.png')}/>
                    <h3>Food Sharing Application</h3>
                    <p>Copyright © 2023</p>
                </div>
                <div className="Group2">
                    <h3>Site map</h3>
                    <p>Mobile Application<br/>
                        Mobile Application<br/>
                        About This Project<br/>
                        Privacy policy<br/>
                        Supports<br/>
                        FQAs</p>
                </div>
                <div className="Group3">
                    <h3>Contact us</h3>
                    <div className="ImageGroup">
                        <img className="ImageGroup1"src={require('../Images/icons8-facebook-circled-128.png')}/>
                        <img className="ImageGroup1"src={require('../Images/icons8-linkedin-circled-100.png')}/>
                        <img className="ImageGroup1"src={require('../Images/icons8-secured-letter-100.png')}/>
                        <img className="ImageGroup1"src={require('../Images/icons8-twitter-100.png')}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer