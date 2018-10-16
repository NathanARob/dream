import React, { Component } from 'react';
import HeaderSection from '../components/header/HeaderSection';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import Footer from '../components/footer/FooterSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Products extends Component{

   
    render(){
        console.log(this.props.match.params.category);
        return(
            <React.Fragment>
                <HeaderSection/>
                {this.props.match.params.category == 'all'? <ProductDisplayAll/> : null}
                {this.props.match.params.category == 'Dreamcatcher'? <ProductDisplayDreamcatcher/> : null}
                {this.props.match.params.category == 'Charm'? <ProductDisplayCharm/> : null}
                {this.props.match.params.category == 'String Art'? <ProductDisplayStringArt/> : null}
                <Footer/>
            </React.Fragment>

           
        );
    }
}





class ProductDisplayAll extends Component{
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
                        <Filter/>
                        
                    </div>
            </React.Fragment>
        );
    }
}


class ProductDisplayDreamcatcher extends Component{
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

                            if(item.categories['0'].name == 'Dreamcatcher'){
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
                                            <div className='shopItemDescription' dangerouslySetInnerHTML={createMarkup()}/>
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
                            );//end of return
                            }

                        })}
                   
                
                    
                
                </div>

                <Filter/>
                
            </div>
            </React.Fragment>
        );
    }
}


class ProductDisplayCharm extends Component{
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

                            if(item.categories['0'].name == 'Charm'){
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
                                            <div className='shopItemDescription' dangerouslySetInnerHTML={createMarkup()}/>
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
                            );//end of return
                            }

                        })}
                   
                
                    
                
                </div>

                <Filter/>
                
            </div>
            </React.Fragment>
        );
    }
}

class ProductDisplayStringArt extends Component{
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

                            if(item.categories['0'].name == 'String Art'){
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
                                            <div className='shopItemDescription' dangerouslySetInnerHTML={createMarkup()}/>
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
                            );//end of return
                            }

                        })}
                   
                
                    
                
                </div>

                <Filter/>
                
            </div>
            </React.Fragment>
        );
    }
}


const Filter = ()=>{
    return(
<div className='filter'>
                    <div className='filterInner'>
                            <div id='allFilter' className='subheadingContainer'><FontAwesomeIcon className='filterIcon' icon={['fa', 'arrow-circle-left']} size=''/><span className='filterSubheading' >All Products</span></div>
                            <div id='stringArtFilter' className='subheadingContainer'><FontAwesomeIcon className='filterIcon' icon={['fa', 'arrow-circle-left']} size=''/><span className='filterSubheading' >String art</span></div>
                            <div id='charmFilter'className='subheadingContainer'><FontAwesomeIcon className='filterIcon' icon={['fa', 'arrow-circle-left']} size=''/><span className='filterSubheading'>Bag Charms</span></div>
                            <div id='dreamcatcherFilter'className='subheadingContainer'><FontAwesomeIcon className='filterIcon' icon={['fa', 'arrow-circle-left']} size=''/><span className='filterSubheading'>Dreamcatcher</span></div>
                        <br/>
                        
                    </div>
</div>
    );
}
export default Products;