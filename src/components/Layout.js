import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ReactTooltip from 'react-tooltip'
import noimagefound from '../images/noimagefound.jpg';
class Layout extends Component {
	
	
	render() {
	
		if(this.props.combinedArray.length < 1){this.props.history.push('/');}
	
	
		let results = this.props.combinedArray.map((_,i,a)=>{
			if(_.image_url !== null) {
			return (
			
				<Link to={'/player' + i}><div className="pod container" data-tip={_.title}>
				<img src={_.image_url} />
				
				</div></Link>
			)
		}
		else {
			return (
				<Link to={'player' + i}><div className="pod container" data-tip={_.title}>
				<img src={noimagefound} />
				
				</div></Link>								  
				   )									   
												   
			 }										   
		})
		
		return(
			<div className="outerLayoutContainer">
			<Navbar />
			<h2 className=" layoutTitle center">{this.props.lastSearch}: <small className="smallPodTitle">PODCASTS</small></h2>
			<div className="layoutDisplay center">
			
				{results}
			</div>
			<ReactTooltip />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		searchTerm: state.searchTerm,
		showArray: state.showArray,
		episodeArray: state.episodeArray,
		combinedArray: state.combinedArray,
        featuredArray: state.featuredArray,
		lastSearch: state.lastSearch
	}
}
export default connect(mapStateToProps)(Layout);