import React, { Component } from 'react';
import logotrans3 from '../images/logotrans3.png';
import SoundBars from './SoundBars';
class Navbar extends Component {
	

	
	
	render() {
	
		
		return (
	<nav className="nav">
		
    <img src={logotrans3} className="brand-logo center"/>
  	<SoundBars />
    <div className="nav-wrapper center">
	
    </div>
			
  </nav>
		
		)
	}
}



export default Navbar;