import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import {Link } from "react-router-dom";
import Header from './Header';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  redirect,
} from 'react-router-dom';

export default function About() {

    return (



        <div class = 'App'>
            {/* <Header /> */}
            <div class="topnav">
            
                <Link to="/" className="App-heading">Home</Link>
                <Link to="/About" className="active">About</Link>
                
            </div>
                    
                
                
            <div class="AboutText">
                <strong> Confused by the plethora of insurance options that StateFarm provides? </strong>
                <br></br>
                <br></br>
                This survey will help you decide what StateFarm products are best for you! 
                <br></br>
                <br></br>
                Click the <strong>Take Survey</strong> button on the <strong>Home</strong> screen and answer a few questions and let our survey decide what options are best for you! 
            </div>

            <div class="images">
              <br></br>
              <br></br>
              <img src="https://image.modcdn.io/mods/e726/1561602/1s-removebg-preview.png"/> 
              
            </div> 

            <div class="footer">
            Created by: Chidera Nwankwo, Vincent Trinh, Matthew Nguyen, Chau Nguyen, Troy Tran
            </div>
        </div>
    )
}