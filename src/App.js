import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Player from './components/Player';
import SoundBars from './components/SoundBars';
class App extends Component {
	
	
	
	
	
	
  render() {
    return (
		<BrowserRouter>
      <div className="App">
     	
		
		
		<Route exact path="/" component={Dashboard}/>
		<Route exact path="/layout" component={Layout}/>
		<Route exact path="/player:id" component={Player}/>
      </div>
		</BrowserRouter>
    );
  }
}

export default App;
