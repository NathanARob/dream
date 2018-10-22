import React,{ Component } from 'react';
import './orderform.css';


class OrderFormComponent extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        /*
        e.preventDefault();
        const name = document.getElementById('name').value;
        const number = document.getElementById('contactnumber').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const messagebody = document.getElementById('message').value;

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

            */

    }


    render(){
        return(
            <div className='contactFormOutter'>
            <h1 className='heading'>Order Form</h1>
            
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
                            <input type='email' id='email' className='inputControl' placeholder='Invoice will be sent here'/>
                        </div>
                        <div className='formGroup'>
                            <label form='subject'>Item: </label>
                            <input type='text' id='subject' className='inputControl' value={this.props.product}/>
                        </div>
                        <div className='formGroup'>
                            <label form='quantity'>Quantity: </label>
                            <input type='text' id='quantity' className='inputControl' value='1'/>
                        </div>
                        <div className='messageGroup'>
                            <label for='message' className='messageLabel'>Message: </label>
                            <textarea rows='15' columns='30' type='text' id='message' className='inputControl'/>
                        </div>
                        <br/>
                        <button className='submitButton' onClick={this.handleSubmit}>Place Order</button>
                        
                    
                    
                    </form>           
                </div>
            </div>
        );
    }

}


export default OrderFormComponent;