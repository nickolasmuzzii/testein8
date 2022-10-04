import React from 'react';
import { Route,  BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
export const width = window.innerWidth
export const height = window.innerHeight

function App() {
  return (
    <div className="App">
     <Router>
        <Header />
        <Route exact path="/" component={Home}/>
     </Router>
    </div>
  );  
}

export default App;
