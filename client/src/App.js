import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage';
import BlogPage from './pages/blogpost';

import { BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/posts/:postid' component={BlogPage}/>
          </Switch>
      </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
