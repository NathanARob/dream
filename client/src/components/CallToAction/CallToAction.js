import React, {Component} from 'react';
import Background from '../../images/header.png'
import './calltoaction.css';


const CallToActionStyle = {
    container:{
        position:"relative",
        width:"100%",
        backgroundColor:"Grey",
        //backgroundImage: "url('https://images.unsplash.com/photo-1534237910030-668b79930128?ixlib=rb-0.3.5&s=a8aadc37d7bbe97c3b49534058d22240&auto=format&fit=crop&w=1500&q=80')",
       backgroundImage: `url(${Background})`,
       backgroundSize: "cover"
    },
     inner:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"100%",
        backgroundColor:'rgba(0,0,0,0.2)',
     },
     tag:{
         fontSize:"4em",
         fontWeight:"bold",
         color: "white",

     },
     buttonLeft:{
        marginRight:"5px",
        padding:"10px",
        backgroundColor:"#8CCDB0",
        border:"solid #8CCDB0",
        borderRadius:"15px",
        color:"#4d4d48"

     },
     buttonRight:{
        marginLeft:"5px",
        padding:"10px",
        backgroundColor:"green",
        border:"solid green",
        borderRadius:"15px"

     }
}


class CallToAction extends Component{


    render(){
        return(
            <div id='CallToAction' style={CallToActionStyle.container}>
                <div id='CallToActionInner' style={CallToActionStyle.inner}>
                    <div>
                        <h1 className='heading' style={CallToActionStyle.tag}>Like what you see? Want something custom</h1>
                    
                        <button style={CallToActionStyle.buttonLeft}>Place an order</button>
                        <button style={CallToActionStyle.buttonRight}>Request quote</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default CallToAction;