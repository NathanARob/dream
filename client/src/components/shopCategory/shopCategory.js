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
                <h2 class='heading'><span class='purchase'>Purchase</span>  Handmade Craft Items</h2>
                    <div id='shopCategories'>

                        <div class='shopCategory'>
                            <div class='categoryTitle'><img src={require('../../images/string-art.jpg')}/></div>
                            <div>
                                   <FontAwesomeIcon className='cartIcon' icon={['fa', 'shopping-cart']} size=''/>
                                   <span class='shopCaption'>String Art</span>  

                            </div>


                        </div>

                        <div class='shopCategory'>
                            <div class='categoryTitle'>
                                <img src={require('../../images/charms.jpg')}/>

                                <div>
                                   <FontAwesomeIcon className='cartIcon' icon={['fa', 'shopping-cart']} size=''/>
                                   <span class='shopCaption'>Bag Charms</span>  

                                </div>
                            </div>
                           
                        </div>

                        <div class='shopCategory'>
                            <div class='categoryTitle'><img src={require('../../images/dreamcatcher.jpg')}/></div>
                            <div>
                                   <FontAwesomeIcon className='cartIcon' icon={['fa', 'shopping-cart']} size=''/>
                                   <span class='shopCaption'>Dreamcatchers</span>  

                                </div>
                        </div>
                    
                    </div>            
                </div>
            );
    }
}



export default ShopByCategory;