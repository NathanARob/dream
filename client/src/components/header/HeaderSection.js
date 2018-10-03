import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import './header.css';

const HeaderSection = () => {
        
    return (
        <div>
            <div class='logoHolder'>
                 <img id='logoImage' src={require('../../images/logo.jpg')} alt='logo'/>
            </div>
            <Navigation/>
        </div>
    );

}


export default HeaderSection;