import React, { Component } from 'react';
import HeaderSection from '../components/header/HeaderSection';
import FullProductDescription from '../components/FullProductDescription/FullProductDescription';
import Footer from '../components/footer/FooterSection';


class FullProdcutDescription extends Component{
    render(){
        return(
            <React.Fragment>
                    <HeaderSection/>
                    <FullProductDescription/>
                    <Footer/>               
            </React.Fragment>
        );
    }
}

export default FullProdcutDescription;