import React, { Component } from 'react';
import logo from '../Images/FOODSHA [Recovered]-01.png'
import account from '../Images/pngegg.png'
import'./Header.css'

const Header=()=>{  


    return(        
            <div className="HeaderGroup">  

                <img src={logo} width ="150"/>
                <ul className="HeaerTitles">                              
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Service</li>
                    <li>About Us</li>
                    <div className="account">
                        <li><img src={account} width ="25" /></li>
                    </div>
                </ul>      
            </div>

    )   
}


export default Header