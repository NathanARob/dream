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
                                        <a className='shopLink' href='/shop/string art'> <span className='shopCaption'>String Art</span>   </a>
                                  
                                </div>
                            </div>


                        </div>

                        <div class='shopCategory'>
                            <div class='categoryTitle'>
                                <img src={require('../../images/charms.jpg')}/>

                                <div className='iconHolder'>
                                    <div>
                                        <FontAwesomeIcon className='cartIcon' icon={['fa', 'shopping-cart']} size=''/>
                                        <span className='shopCaption'>Bag Charms</span> 
                                    </div> 

                                </div>
                            </div>
                           
                        </div>

                        <div className='shopCategory'>
                            <div className='categoryTitle'><img src={require('../../images/dreamcatcher.jpg')}/></div>
                                <div className='iconHolder'>
                                    <div>
                                        <FontAwesomeIcon className='cartIcon' icon={['fa', 'shopping-cart']} size=''/>
                                        <span className='shopCaption'>Dreamcatchers</span>  
                                    </div>
                                </div>
                        </div>
                    
                    </div>            
                </div>
            );
    }
}



export default ShopByCategory;