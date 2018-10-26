import React, { Component } from 'react';
import './intro.css';
import Dreamcatcher from '../../images/Dreamcatcher-nobackground.png'


const IntroSection = () => {
        
    return (
        <div id='introContainer'>
                <div className='introText'>
                    <div className='bigwords'>
                        <span className='welcometo'>Welcome to</span>
                        <span className='companyname'><span className='dream'>Dream</span><span className='capture'> Capture</span></span>
                    </div>
                    <p className='introPara'>
                        I have always loved crafting and creating, and it has always been a dream of mine to be able to create beautiful pieces and share my creations with the world. Dream Capture is my vessel to do so! I take inspiration from things around me, online – Pinterest especially! I try to create things I would love to see and own myself, and of course I love getting requests as well. 
                        So please feel free to take a look around. Share with your friends and family if you like or place an order for something special! If you are looking for something and don’t see it here – please feel free to pop me a mail and let’s chat about how to capture your custom design and make that dream a reality. 
                    </p>
                </div>
            </div>    
    );

}


export default IntroSection;