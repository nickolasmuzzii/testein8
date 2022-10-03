import React from 'react';
import { Route,  BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
export const width = window.innerWidth
export const height = window.innerHeight

function App() {
  return (
    <div className="App">
     <Router>
        <Header />
        <Route exact path="/home" component={Home}/>
     </Router>
    </div>
  );  
}

export default App;
