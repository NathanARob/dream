import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage';
import BlogPage from './pages/blogpost';
import Products from './pages/productpage';
import ContactUsPage from './pages/contact-us';
import FullPageDescription from './pages/full-product-description';
import OrderForm from './pages/order-form';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope, faArrowAltCircleLeft, faArrowCircleLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope, faArrowCircleLeft, faShoppingCart)



class App extends Component {
  componentWillMount() {
    document.title = 'Dream Capture'
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/posts/:postid' component={BlogPage}/>
            <Route path='/shop/:category' component={Products} exact/>
            <Route path='/shop/:category/full-description' component={FullPageDescription}/>
            <Route path='/order/:product' component={OrderForm}/>
            <Route path='/contact-us' component={ContactUsPage}/>
          </Switch>
      </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
