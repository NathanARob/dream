import React, { Component } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const HeaderSection = () => {
        
    return (
        <div>
            <div class='logoHolder'>
                 <a href='/'><img id='logoImage' src={require('../../images/logo.jpg')} alt='logo'/></a>
            </div>
            <Nav/>
        </div>
    );

}




const Nav = () =>{

    return(
        <div className='navContainer' style={headerTheme.navContainer}>
            <div className='navContainerInner' style={headerTheme.navContainerInner}>
                <div className='leftNav' style={headerTheme.leftNav}>
                    <a href='' className='navItem' >About</a>
                    <a href='' className='navItem' style={headerTheme.navItem}>Products</a>
                    <a href='' className='navItem' style={headerTheme.navItem}>Custom Order</a>
                    <a href='' className='navItem' style={headerTheme.navItem}>Contact</a>  
                </div>
                <div className='leftRight' style={headerTheme.rightNav}>
                    <span className='navItemSocial' style={headerTheme.navItemSocial}><a className='socialLink' href=''><FontAwesomeIcon className='insta' icon={['fab', 'instagram']} size='2x'/></a></span>
                    <span className='navItemSocial' style={headerTheme.navItemSocial}><a className='socialLink' href=''><FontAwesomeIcon className='facebook' icon={['fab', 'facebook']} size='2x'/></a></span>
                    <span className='navItemSocial' style={headerTheme.navItemSocial}><a className='socialLink' href=''><FontAwesomeIcon className='pinterest' icon={['fab', 'pinterest']} size='2x'/></a></span>

                </div>
            </div>
        </div>
    );
};

const headerTheme={
    navContainer:{
        width:'100%',
        height:'50px',
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#5B7D76',
    },
    navContainerInner:{
        width:'80%',
        height:'50px',
        display:'flex',
        justifyContent:'space-between',
    },
    leftNav:{
        display:'flex',
        alignItems:'center'        
    },
    rightNav:{
        display:'flex',
        alignItems:'center'        
    },
    navItem:{
        paddingLeft:'10px',
        
    },
    navItemSocial:{
        paddingRight:'25px',

    }
}



export default HeaderSection;