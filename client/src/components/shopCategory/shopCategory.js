import React, { Component } from 'react';
import './shopCategory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


let url='http://localhost/dreamcapture';


class ShopByCategory extends Component{

    componentDidMount(){
     
    }

    render(){
        
            return (
                <div id='shopCategoryContainer'>
                <h2 class='heading productHeading'><span class='purchase'>Purchase</span>  Handmade Craft Items</h2>
                    <div id='shopCategories'>

                        <div className='shopCategory'>
                            <div className='categoryTitle'><img src={require('../../images/string-art.jpg')}/></div>
                            <div className='iconHolder'>
                                <div>                                    
                                        <FontAwesomeIcon className='cartIcon' icon={['fa', 'shopping-cart']} size=''/>
                                        <a className='shopLink' href='/shop/String Art'>
                                            <span className='shopCaption'>String Art</span>
                                        </a>                 
                                </div>
                            </div>


                        </div>

                        <div class='shopCategory'>
                            <div class='categoryTitle'>
                                <img src={require('../../images/charms.jpg')}/>

                                <div className='iconHolder'>
                                    <div>
                                        <FontAwesomeIcon className='cartIcon' icon={['fa', 'shopping-cart']} size=''/>
                                        <a className='shopLink' href='/shop/Charm'> 
                                            <span className='shopCaption'>Bag Charms</span> 
                                        </a>
                                    </div> 

                                </div>
                            </div>
                           
                        </div>

                        <div className='shopCategory'>
                            <div className='categoryTitle'><img src={require('../../images/dreamcatcher.jpg')}/></div>
                                <div className='iconHolder'>
                                    <div>
                                        <FontAwesomeIcon className='cartIcon' icon={['fa', 'shopping-cart']} size=''/>
                                        <a className='shopLink' href='/shop/Dreamcatcher'> 
                                            <span className='shopCaption'>Dreamcatchers</span>
                                        </a>  
                                    </div>
                                </div>
                        </div>
                    
                    </div>  
                    <div>
                        <h4 className='customOrder'>If you would like to place a custom order for special event please <a href='/contact-us' alt='contact us'>Contact Us</a></h4>         
                    </div> 
                </div>
            );
    }
}



export default ShopByCategory;