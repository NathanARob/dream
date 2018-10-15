import React, {Component} from 'react';
import Background from '../../images/calltoaction.jpeg'


const CallToActionStyle = {
    container:{
        position:"relative",
        width:"100%",
        height:"60vh",
        backgroundColor:"Grey",
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
         fontSize:"3em",
         fontWeight:"bold",
         color: "#8ee2fe",

     },
     buttonLeft:{
        marginRight:"5px",
        padding:"10px",
        backgroundColor:"orange",
        border:"solid orange",
        borderRadius:"10px"

     },
     buttonRight:{
        marginLeft:"5px",
        padding:"10px",
        backgroundColor:"green",
        border:"solid green",
        borderRadius:"10px"

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