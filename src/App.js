import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm.js';
import LoginForm from './pages/LoginForm.js';
import Editor from './pages/Editor.js';

import './css/App.css';

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	<Route exact path="/" component={SignUpForm}></Route>
          <Route path="/login" component={LoginForm}></Route>   
          <Route path="/editor" component={Editor}></Route>
	      </div>
		</Router>
    );
  }
}

export default App;
