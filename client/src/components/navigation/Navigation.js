import React, { Component } from 'react';
import './navigation.css';

const Navigation = () => {
        
    return (
        <div id='navigationContainer'>
            <nav id='navigation'>
               <div id='navigationItemsLeft'>
                    <ul id='navigationList'>
                        <li class='navItem'>
                            <a href='#'>About</a>
                        </li>
                        <li id='productDrop' class='navItem'>
                            <a href='#'>Products</a>
                            <div class='dropDown'>
                                <div>
                                    <span class='subcategory'>Category 1</span>
                                    <li><a href='#'>Item 1</a></li>
                                    <li><a href='#'>Item 2</a></li>
                                    <li><a href='#'>Item 3</a></li>
                                </div>
                                <div>
                                    <span class='subcategory'>Category 2</span>
                                    <li><a href='#'>Item 1</a></li>
                                    <li><a href='#'>Item 2</a></li>
                                    <li><a href='#'>Item 3</a></li>
                                </div>
                            </div>
                        </li>
                        <li class='navItem'>
                            <a href='#'>Gallery</a>
                        </li>
                    </ul>
                   
               </div>
               {/* <div id='navigationItemsRight'>
                   <span class='navItem'>Cart</span>
                   <span class='navItem'>My Account</span>
                   <span class='navItem'>pinterest</span>
                   <span class='navItem'>Item 8</span>
               </div> */}
            </nav>
        </div>
    );
}


export default Navigation;