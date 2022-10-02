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
      {/* <Header /> */}
      <div class="topnav">
        <a class="active" href="">Home</a>
        <Link to="/About" className='App-heading2'>
                    About
                    </Link>
      </div>
    
      <img 
        src = "https://1000logos.net/wp-content/uploads/2018/04/State-Farm-Logo.png"
        alt = "Statefarm Logo"
        className = "App-logo"
      />

      <h2>Welcome to the StateFarm Insurance Survey!</h2>
      <br></br>
        
      
        <div>
          
          <Link to="/Survey" className="myButton">Take Survey</Link>
        </div>
    
    </div>
      
  );
}

export default App;
