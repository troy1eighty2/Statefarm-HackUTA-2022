import ReactDOM from 'react-dom/client';
import Quiz from './Quiz';
import './Survey.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './About';
import {Link } from "react-router-dom";


function Survey() {

     return (
        
        <div class = 'Survey'>
            {/* <Header /> */}
            <div class="topnav">
                <Link to="/" className="App-heading">Home</Link>
                <Link to="/About" className='App-heading'>About</Link>
            </div>
            <Quiz>
                
            </Quiz>
                
            </div>
     );

 }

 export default Survey;