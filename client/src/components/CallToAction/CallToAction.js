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
         fontSize:"6em",
         fontWeight:"bold",
         color: "white",

     },
     buttonLeft:{
        marginRight:"5px",
        padding:"15px",
        backgroundColor:"rgba(140,205,176,0.8)",
        border:"solid #4d4d48",
        borderRadius:"15px",
        color:"#4d4d48",
        fontSize:'1.2em',
        fontFamily:'Roboto',
        textDecoration:'none'

     },
     buttonRight:{
        marginLeft:"5px",
        padding:"15px",
        backgroundColor:"rgba(0,0,0,0)",
        border:"solid #ededed",
        borderRadius:"15px",
        color:"#ededed",
        fontSize:'1.2em',
        fontFamily:'Roboto',
        textDecoration:'none'
   
        

     }
}


class CallToAction extends Component{


    render(){
        return(
            <div id='CallToAction' style={CallToActionStyle.container}>
                <div id='CallToActionInner' style={CallToActionStyle.inner}>
                    <div>
                        <h1 className='heading' style={CallToActionStyle.tag}>Handcrafted items made beautifully</h1>
                    
                        <a href='/shop/all' className='buttonLeft' style={CallToActionStyle.buttonLeft}>View Products</a>
                        <a href='/contact-us' className='buttonRight' style={CallToActionStyle.buttonRight}>Custom quote</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default CallToAction;