import React, { Component } from 'react';
import OrderFormComponent from '../components/orderForm/OrderForm';
import HeaderSection from '../components/header/HeaderSection';
import Footer from '../components/footer/FooterSection';



class OrderForm extends Component{

    render(){
        return(
            <React.Fragment>
                <HeaderSection/>
                <OrderFormComponent product={this.props.match.params.product}/>
                <Footer/>
            </React.Fragment>
        )
    }

}

export default OrderForm;