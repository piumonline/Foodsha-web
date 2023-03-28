import React from 'react';
import './HorizontalCard.css'

const HorizontalCard = () =>{
    return(
        <div className="CardH">
            <div className="Donation">
                <font>Donation</font>
    
                <div className="hCard">
                    <img style={{marginLeft:'-20px'}} src={require("../Images/r2.png")} />
                    
                    <div className="Hsquare">            
                    <p style={{marginBottom:'85px'}}>Free</p>
                        <h3 style={{marginLeft:'-20px'}}>Rice and curry</h3>
                        <h4 style={{marginLeft:'-7px'}}>Chicken Rice</h4>               
                    </div>

                </div>
                <div className="hCard">
                    <img style={{marginLeft:'-20px'}} src={require("../Images/i6.png")} />
                    
                    <div className="Hsquare">            
                    <p style={{marginBottom:'85px'}}>Free</p>
                        <h3 style={{marginLeft:'15px'}}>Ice cream</h3>
                        <h4 style={{marginLeft:'-25px'}}>Mix ice cream</h4>               
                    </div>

                </div>
                <div className="hCard">
                    <img style={{marginLeft:'-20px'}} src={require("../Images/f4.png")} />
                    
                    <div class="Hsquare">            
                    <p style={{marginBottom:'85px'}}>Free</p>
                        <h3 style={{marginLeft:'120px'}}>Fruit</h3>
                        <h4 style={{marginLeft:'95px'}}>Graphs</h4>               
                    </div>

                </div>
                <div className="hCard">
                    <img style={{marginLeft:'-20px'}} src={require("../Images/fi3.png")} />
                    
                    <div className="Hsquare">            
                    <p style={{marginBottom:'85px'}}>Free</p>
                        <h3 style={{marginLeft:'80px'}}>Fish</h3>
                        <h4 style={{marginLeft:'28px'}}>Fried fish</h4>               
                    </div>

            </div>
            </div>

            <div className="Discount">
                <font>Discount</font>

    
                <div className="hCard">
                    <img style={{marginLeft:'-20px'}} src={require("../Images/fi1.png")} />
                    
                    <div className="Hsquare">            
                    <p style={{marginBottom:'85px'}}>Rs.200</p>
                        <h3 style={{marginLeft:'70px'}}>Salad</h3>
                        <h4 style={{marginLeft:'28px'}}>Egg salad</h4>               
                    </div>

                </div>
                <div className="hCard">
                    <img style={{marginLeft:'-20px'}} src={require("../Images/d2.png")} />
                    
                    <div class="Hsquare">            
                    <p style={{marginBottom:'85px'}}>Rs.180</p>
                        <h3 style={{marginLeft:'65px'}}>Soft drink</h3>
                        <h4 style={{marginLeft:'105px'}}>Pepsi</h4>               
                    </div>

                </div>
                <div className="hCard">
                    <img style={{marginLeft:'-20px'}} src={require("../Images/c2.png")} />
                    
                    <div className="Hsquare">            
                    <p style={{marginLeft:'-29px', marginBottom:'85px'}}>Rs.200</p>
                        <h3 style={{marginLeft:'39px'}}>Bite</h3>
                        <h4 style={{marginLeft:'-45px'}}>devil cicken </h4>               
                    </div>

                </div>
                <div className="hCard">
                    <img style={{marginLeft:'-20px'}} src={require("../Images/cu1.png")} />
                    
                    <div className="Hsquare">            
                    <p style={{marginBottom:'85px'}}>Rs.100</p>
                        <h3 style={{marginLeft:'50px'}}>soup</h3>
                        <h4 style={{marginLeft:'-40px'}}>Chicken soup</h4>               
                    </div>

                </div>
        </div>

        <div className="Request">
            <font>Request</font>

    
            <div className="hCard">
                <img style={{marginLeft:'-20px'}} src={require("../Images/r5.png")} />
                    
                <div className="Hsquare">            
                <p style={{marginBottom:'85px' , marginLeft:'-29px'}}>Tonight</p>
                    <h3 style={{marginLeft:'-51px'}}>Rice and curry</h3>
                    <h4 style={{marginLeft:'-52px'}}>Vegitable Rice</h4>               
                </div>

            </div>
            <div className="hCard">
                <img style={{marginLeft:'-20px'}} src={require("../Images/f6.png")} />
                    
                <div className="Hsquare">            
                <p style={{marginBottom:'85px'}}>Soon</p>
                    <h3 style={{marginLeft:'55px'}}>Fruit</h3>
                    <h4 style={{marginLeft:'-40px'}}>Pomegranate</h4>               
                </div>

            </div>
            <div className="hCard">
                <img style={{marginLeft:'-20px'}} src={require("../Images/f2.png")} />
                    
                <div className="Hsquare">            
                <p style={{marginBottom:'85px'}}>Tonight</p>
                    <h3 style={{marginLeft:'85px'}}>Fruit</h3>
                    <h4 style={{marginLeft:'40px'}}>Pinapple</h4>               
                </div>

            </div>
            <div className="hCard">
                <img style={{marginLeft:'-20px'}} src={require("../Images/cu6.png")} />
                    
                <div className="Hsquare">            
                <p style={{marginBottom:'85px' }}>Tonight</p>
                    <h3 style={{marginLeft:'-20px'}}>Rice and curry</h3>
                    <h4 style={{marginLeft:'-20px'}}>Rice and curry</h4>               
                </div>
            </div>
        </div>

        <div className="circle1">
        </div>
        <div className="circle2">
        </div>
    </div>
    )
}

export default HorizontalCard