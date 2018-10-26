import React,{ Component } from 'react';
import './orderform.css';


class OrderFormComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'',
            number:'',
            email:'',
            item:'',
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
        const item = document.getElementById('item').value;

        //const quantity = document.getElementById('quantity').value;
        const  messageBody = document.getElementById('message').value;
        

        this.setState({
            name: name,
            number: number,
            email: email,
            item: item,
            message: messageBody,
            done: 'Yes'
        })
        

        
          
        fetch('/order',{
            method: 'POST',
            body: JSON.stringify({
                name: name,
                number: number,
                email: email,
                item: item,
                messagebody: messageBody
            }),
            headers:{"Content-type": "application/json" }
            }).then(res => res.json()).then(data => console.log(data));

           
        

    
    }


    renderBody(){
        if(this.state.done != 'Yes'){
            return(
            <div className='contactFormOutter'>
                        <h1 className='heading'>Order Form</h1>
                        
                            <div className='contactFormInner'>
                                <form className='contactForm' >
                                    <div className='formGroup'>
                                        <label for='name'>Name: </label>
                                        <input type='text' id='name' className='inputControl' required/>
                                    </div>
                                    <div className='formGroup'>
                                        <label for='contactnumber'>Contact Number: </label>
                                        <input type='text' id='contactnumber' className='inputControl' required/>
                                    </div>
                                    <div className='formGroup'>
                                        <label for='email'>Email: </label>
                                        <input type='email' id='email' className='inputControl' placeholder='Invoice will be sent here' required/>
                                    </div>
                                    <div className='formGroup'>
                                        <label form='item'>Item: </label>
                                        <input type='text' id='item' className='inputControl' value={this.props.product}/>
                                    </div>
                                    {/* <div className='formGroup'>
                                        <label form='quantity'>Quantity: </label>
                                        <input type='text' id='quantity' className='inputControl' value='1'/>
                                    </div> */}
                                    <div className='messageGroup'>
                                        <label for='message' className='messageLabel'>Any special request?: </label>
                                        <textarea rows='15' columns='30' type='text' id='message' className='inputControl'/>
                                    </div>
                                    <br/>
                                    <button className='submitButton' onClick={this.handleSubmit}>Place Order</button>
                                    
                                
                                
                                </form>           
                            </div>
                        </div>
            );
        }else{
            return( <div className='contactFormOutter'>
            <h1 className='heading'>Order Form</h1>
            
                <div className='contactFormInner'>
                   <h1>Thank You for your order!</h1>  
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


export default OrderFormComponent;