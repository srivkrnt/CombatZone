import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import logo from './../Images/logo.png';
import Editor from './../Images/about.png'
import './../css/App.css'

class LoginForm extends Component {
       render() {
        return (
        <div className="App">
          <div className = "left_section">
              <div className ="Logo_Title"> COMBAT ZONE </div>
              <img src={logo} className="logo_img"></img>
              <div className="Form_Fields">
                  <div className = "Form_Title" > Already a Warrior </div> 
                  <form>
                      <label>EMAIL</label>
                      <input type="text" id="email" placeholder="xyz@abc.com" name="email"/>
                      <label>PASSWORD</label>
                      <input type="password" id="pass" placeholder="********" name="pass1"/>
                      <button className="submit"> SUBMIT </button>
                  
              </form>
                    
                </div>
          </div>

          <div className = "right_section">
              <div className = "switch">
                <NavLink to="/login" activeClassName="switch_active" className="switch_item">Login </NavLink>
                <NavLink exact to="/" activeClassName="switch_active" className="switch_item">Sign Up </NavLink>
                <NavLink exact to="/editor" activeClassName="switch_active" className="switch_item">Editor</NavLink>
  
              </div>

              <img src={Editor} className="Editor_Img"></img>

          </div>

      </div>


       );
    }
}

export default LoginForm;
