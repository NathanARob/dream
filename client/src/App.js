import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage';
import BlogPage from './pages/blogpost';
import Products from './pages/productpage';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope, faArrowAltCircleLeft, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope, faArrowCircleLeft)



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/posts/:postid' component={BlogPage}/>
            <Route path='/shop/:category' component={Products}/>
          </Switch>
      </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
