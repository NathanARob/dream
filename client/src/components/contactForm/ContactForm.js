import React,{ Component } from 'react';
import './contactform.css';


class ContactForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'',
            number:'',
            email:'',
            subject:'',
            message:'',
            done:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderBody = this.renderBody.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const number = document.getElementById('contactnumber').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const messagebody = document.getElementById('message').value;

        this.setState({
            name: name,
            number: number,
            email: email,
            subject: subject,
            message: messagebody,
            done: 'Yes'
        })

        fetch('/send',{
            method: 'POST',
            body: JSON.stringify({
                name: 'name',
                number: number,
                email: email,
                subject: subject,
                messagebody: messagebody
            }),
            headers:{"Content-type": "application/json" }
            }).then(res => res.json()).then(data => console.log(data));



    }

    renderBody(){
        if(this.state.done != 'Yes'){
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
                            <br/>
                            <div className='messageGroup'>
                                <label for='message' className='messageLabel'>Have a query or want to place a custom order? Let us know below </label>
                                <textarea rows='15' columns='30' type='text' id='message' className='inputControl'/>
                            </div>
                            <br/>
                            <button className='submitButton' onClick={this.handleSubmit}>Send</button>
                            
                        
                        
                        </form>           
                    </div>
                </div>
            );
        }else{
            return( <div className='contactFormOutter'>
            <h1 className='heading'>Get in touch...</h1>
            
                <div className='contactFormInner'>
                   <h1>Thank You for getting in touch!</h1>  
                   <h3>We will be in contact soon...</h3>   
                </div>
            </div>
            );
        }
    }

    render(){
        return(
            this.renderBody()
        );
    }

}


export default ContactForm;