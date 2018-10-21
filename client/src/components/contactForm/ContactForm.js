import React,{ Component } from 'react';
import './contactform.css';


class ContactForm extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        fetch('/send',{
            method: 'POST'
        }).then(res => res.json()).then(data => console.log(data));



    }


    render(){
        return(
            <div className='contactFormOutter'>
            <h1 className='heading'>Get in touch</h1>
            
                <div className='contactFormInner'>
                    <form className='contactForm' >
                        <div className='formGroup'>
                            <label for='name'>Name: </label>
                            <input type='text' id='name' className='inputControl'/>
                        </div>
                        <div className='formGroup'>
                            <label for='contactnumber'>Contact Number: </label>
                            <input type='text' id='contactnumber' className='inputControl'/>
                        </div>
                        <div className='formGroup'>
                            <label for='email'>Email: </label>
                            <input type='email' id='email' className='inputControl'/>
                        </div>
                        <div className='formGroup'>
                            <label form='subject'>Subject: </label>
                            <input type='text' id='subject' className='inputControl'/>
                        </div>
                        <div className='messageGroup'>
                            <label for='message' className='messageLabel'>Message: </label>
                            <textarea rows='15' columns='30' type='text' id='message' className='inputControl'/>
                        </div>
                        <br/>
                        <button className='submitButton' onClick={this.handleSubmit}>Send</button>
                        
                    
                    
                    </form>           
                </div>
            </div>
        );
    }

}


export default ContactForm;