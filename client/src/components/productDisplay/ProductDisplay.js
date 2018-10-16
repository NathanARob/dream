import React, { Component } from 'react';
import './productdisplay.css';
import HeaderSection from '../header/HeaderSection';
import Footer from '../footer/FooterSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




class ProductDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            shop:[]
        }
    }

    componentWillMount(){
        fetch('/api/products')
        .then((res)=>res.json())
        .then((data)=>{
                        
            this.setState({
                shop: data,
            })
        });
    }

   
    render(){
        
        return(
            <React.Fragment>

            <h1 className='heading'>Products</h1>

            <div className='productDisplayContainer'>
                                            
                <div className='products'>

                    
                    {this.state.shop.map((item)=>{

                    function createMarkup() { return {__html: item.short_description}; };
                         
                        return(
                           
                                <div className='shopItem'>
                                    <div>
                                        <img className='shopItemImage' src={item.images['0'].src} alt='Product Image'/>
                                    </div>
                                    <div>
                                        <span className='shopItemName'>{item.name}</span>
                                    </div>
                                    <div>
                                        R{item.price}
                                    </div>
                                   
                                    <div>
                                        {/* <div className='shopItemDescription'> */}
                                            <div className='shopItemDescription' dangerouslySetInnerHTML={createMarkup()}/>
                                        {/* </div> */}
                                        <div class='lower'>
                                            <div className='sharing'>
                                                <FontAwesomeIcon className='shareicon pinterestShare' icon={['fab', 'pinterest']} size=''/>
                                                <FontAwesomeIcon className='shareicon facebookShare' icon={['fab', 'facebook']} size=''/>
                                                <FontAwesomeIcon className='shareicon emailShare' icon={['fa', 'envelope']} size=''/>
                                            </div>
                                            <div className='placeOrder'>
                                                <button>Place Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                        );                        
                    })}
                
                    
                
                </div>
                <div className='filter'>
                       <div className='filterInner'>
                    
                        <span className='filterHeading'>Products</span>
                            <span className='filterSubheading'>String art</span>
                            <span className='filterSubheading'>Bag Charms</span>
                            <span className='filterSubheading'>Dreamcatcher</span>
                        <br/>
                        <span className='filterHeading'>Price</span>
                            <span className='filterSubheading'>Ascending</span>
                            <span className='filterSubheading'>Decending</span>
                    </div>

                </div>


            
            
            
            
            
            
            
            
            </div>
            </React.Fragment>
        );
    }
}


export default ProductDisplay;