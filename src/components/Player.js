import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import axios from 'axios';
import ReactTooltip from 'react-tooltip'
import noimagefound from '../images/noimagefound.jpg';


class Player extends Component {
	
	

    
  

	
	
	render() {
	
		const id = ~~(this.props.match.params.id);
        let chooseFromFeaturedOrSearch;
		let match;
		if(this.props.featuredArray.length === 0 && this.props.combinedArray.length >=1) {
            chooseFromFeaturedOrSearch = this.props.combinedArray[id].show_id;
        }
        else {
			if(this.props.featuredArray[id] !== undefined) {
            chooseFromFeaturedOrSearch = this.props.featuredArray[id].show_id;
			}
			else{this.props.history.push('/');}
        }
		
	
		axios.get("https://api.spreaker.com/oembed?url=https://www.spreaker.com/show/" + chooseFromFeaturedOrSearch).then((response)=>{
 			let responseString = response.data.html.replace('true', 'true').replace('width="640"', 'width="100%"').replace('height="480"', 'height="380"').replace('jpg', '');;
			document.getElementById('player').innerHTML = responseString;
			
			
		
        })
		
		

	return (
	<div>
		<Navbar />
	<div id="player" className="player">
		</div>
		
		
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
export default connect(mapStateToProps)(Player);