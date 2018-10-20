import React,{ Component } from 'react';
import './contactform.css';


class ContactForm extends Component{
    constructor(props){
        super(props);

    }

    handleSubmit(){



    }


    render(){
        return(
            <div className='contactFormContainer'>
                <h1 className='heading'>Get in touch</h1>
                <form className='contactForm'>
                    <div className='formGroup'>
                        <label for='name'>Name: </label>
                        <input type='text' id='name' className='inputControl'/>
                    </div>
                    <div className='formGroup'>
                        <label for='contactnumber'>Contact Number: </label>
                        <input type='number' id='contactnumber' className='inputControl'/>
                    </div>
                    <div className='formGroup'>
                        <label for='email'>Email: </label>
                        <input type='email' id='email' className='inputControl'/>
                    </div>
                    <div className='formGroup'>
                        <label form='subject'>Subject: </label>
                        <input type='text' id='subject' className='inputControl'/>
                    </div>
                    <div className='formGroup'>
                        <label for='message'>Message: </label>
                        <textarea rows='10' columns='10' type='text' id='message' className='inputControl'/>
                    </div>
                       
                
                
                </form>           
            </div>
        );
    }

}


export default ContactForm;