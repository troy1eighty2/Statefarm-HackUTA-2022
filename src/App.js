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

function App() {
  const [count,setCount] = useState(0)
  
  

  return (

    <div className="App">
      <Header />
      <div class="topnav">
        <a class="active" href="">Home</a>
        <a href="">About</a>
      </div>
      
        <h1>Welcome to the StateFarm Insurance Survey!</h1>
        <img 
        src = "https://cdn.discordapp.com/attachments/1021450963606843444/1025900081246916638/State-Farm-Logo_2.png"
        alt = "Statefarm Logo"
        className = "App-logo"
        />

        <div>
          <a class="myButton" href=''>Take Survey</a>
        </div>
    
    </div>
      
  );
}

function Test() {
  return (<div>Hello</div>);
}
export default App;
