import React, { Component } from 'react';
import HeaderSection from '../components/header/HeaderSection';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import Footer from '../components/footer/FooterSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Products extends Component{

   
    render(){
        console.log(this.props.match.params.category);
        return(
            <div className='productjesus'>
                <HeaderSection/>
                {this.props.match.params.category == 'all'? <ProductDisplayAll  product={this.props.match.params.category}/> : null}
                {this.props.match.params.category == 'Dreamcatcher'? <ProductDisplayDreamcatcher/> : null}
                {this.props.match.params.category == 'Charm'? <ProductDisplayCharm/> : null}
                {this.props.match.params.category == 'String Art'? <ProductDisplayStringArt/> : null}
                <Footer/>
            </div>

           
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
            <div>

                    <h1 className='heading'>Products</h1>
                    <span class='categoryShowing'>Showing: All Products</span>

                    <div className='productDisplayContainer'>
                                                    
                        <div className='products'>

                            
                            {this.state.shop.map((item)=>{
                                
                        
                                function createMarkup() { return {__html: item.short_description}; };

                                let orderRef = '/order/'+item.name;
                                
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
                                                        
                                                        <a href={orderRef}>
                                                            <button>Place Order</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                );                        
                            })}
                        </div>
                        <Filter/>
                        
                    </div>
            </div>
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
            <div>

            <h1 className='heading'>Products</h1>
            <span class='categoryShowing'>Showing: Dreamcatchers</span>
        

            <div className='productDisplayContainer'>
                                            
                <div className='products'>
                        {this.state.shop.map((item)=>{

let orderRef = '/order/'+item.name;


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
                                                <a href={orderRef}>
                                                    <button>Place Order</button>
                                                </a>
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
            </div>
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
            <div>

            <h1 className='heading'>Products</h1>
            <span class='categoryShowing'>Showing: Bag Charms</span>

            <div className='productDisplayContainer'>
                                            
                <div className='products'>
                        {this.state.shop.map((item)=>{

                            let orderRef = '/order/'+item.name;


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
                                                <a href={orderRef}>
                                                    <button>Place Order</button>
                                                </a>
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
            </div>
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
            <div>

            <h1 className='heading'>Products</h1>
            <span class='categoryShowing'>Showing: String Art</span>

            <div className='productDisplayContainer'>
                                            
                <div className='products'>
                        {this.state.shop.map((item)=>{
                            
                            let orderRef = '/order/'+item.name;


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
                                                <a href={orderRef}>
                                                    <button>Place Order</button>
                                                </a>
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
            </div>
        );
    }
}


class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected: ''
        };

        this.setRefiner = this.setRefiner.bind(this);
    }

    setRefiner(e){
        console.log(e);
    }


    render(){return(
    <div className='filter'>
        <span class='refineHeading'>Refine By:</span>
                        <div className='filterInner'>
                                <div id='allFilter' className='subheadingContainer'>
                                    <a href='/shop/all' onClick={this.setRefiner()}><FontAwesomeIcon className='filterIcon' icon={['fa', 'arrow-circle-left']} size=''/><span className='filterSubheading' >All Products</span></a>
                                </div>
                                <div id='stringArtFilter' className='subheadingContainer'>
                                    <a href='/shop/String Art'><FontAwesomeIcon className='filterIcon' icon={['fa', 'arrow-circle-left']} size=''/><span className='filterSubheading' >String art</span></a>
                                </div>
                                <div id='charmFilter'className='subheadingContainer'>
                                    <a href='/shop/Charm'><FontAwesomeIcon className='filterIcon' icon={['fa', 'arrow-circle-left']} size=''/><span className='filterSubheading'>Bag Charms</span></a>
                                </div>
                                <div id='dreamcatcherFilter'className='subheadingContainer'>
                                    <a href='/shop/Dreamcatcher'><FontAwesomeIcon className='filterIcon' icon={['fa', 'arrow-circle-left']} size=''/><span className='filterSubheading'>Dreamcatcher</span></a>
                                </div>
                            <br/>
                            
                        </div>
                        
    </div>
        );
    }
}


export default Products;