import React from 'react';
import'./Hero.css';
import Card from './Card';
import image_1 from '../Images/r2.png'



const Hero = () =>{
    return(
        <div className="Hero">
            <div className="HeroTitle">
                <div className="heroTitle1">
                    <h1>Donate</h1> 
                    <h2>Extra Foods</h2> 
                </div> 
                <h1>And Reduce</h1> 
                <h2>Food Wastage</h2>

                <p>
                    Our mission is to help fight hunger and reduce <br/> 
                    food waste by connecting those in need with <br/>
                    generous donors who have excess food to give.
                </p>
                <div className="Button">
                    <button > <a href=""> LOGIN </a> </button>
                </div>
            </div>
            <div className="HeroImage">
                <div>
                    <Card 
                        image={require('../Images/r2.png')}
                        topic="Rice"
                        kind="Chicken rice"
                        price="Free"/>  

                    <Card image={require('../Images/r1.png')}
                        topic="Rice and curry"
                        kind="Vegitable rice"
                        price="Rs.200"/> 
                </div>
                <div>
                    <Card 
                        image={require('../Images/fi3.png') }
                        topic="Fish"
                        kind="Fried fish"
                        price="Free"/>

                    <Card 
                        image={require('../Images/i4.png')}
                        topic="Ice cream"
                        kind="Mix ice cream"
                        price="Rs.100"/>  
                                
                </div>            
            </div>
        </div>
    )
}

export default Hero