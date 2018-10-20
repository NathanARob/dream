import React, { Component } from 'react';
import ContactForm from '../components/contactForm/ContactForm';
import HeaderSection from '../components/header/HeaderSection';
import Footer from '../components/footer/FooterSection';



class ContactUsPage extends Component{

    render(){
        return(
            <div>
                <HeaderSection/>
                <ContactForm/>
                <Footer/>
            </div>
        )
    }

}

export default ContactUsPage;