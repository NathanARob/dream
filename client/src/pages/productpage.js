import React, { Component } from 'react';
import HeaderSection from '../components/header/HeaderSection';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import Footer from '../components/footer/FooterSection';
class Products extends Component{

   
    render(){
        return(
            <React.Fragment>
                <HeaderSection/>
                <ProductDisplay/>
                <Footer/>
            </React.Fragment>

           
        );
    }
}


export default Products;