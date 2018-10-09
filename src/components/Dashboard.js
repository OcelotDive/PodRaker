import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import logotrans from '../images/logotrans.png';
import FeaturedStrip from './FeaturedStrip';


class Dashboard extends Component {
	
	state = {
		clicked: false,
		
	}
	
      componentDidMount() {
    axios.get('https://api.spreaker.com/v2/explore/lists/108/items?limit=6').then((response)=>{
	
      let featuredArray = response.data.response.items;
        
        this.props.getFeatured(featuredArray);
		
        })
  }


	isClicked = () => {
		this.setState({
		clicked: !this.state.clicked
	})
	}
	


	handleSearchChange = (e) => {
		let searchString = e.target.value;
		this.props.sendSearchString(searchString)
		
	}
	
	handleSubmit = (e) => {
        
		e.preventDefault();
		let sT = this.props.searchTerm;
		let url1 = 'https://api.spreaker.com/v2/search?type=shows&q=' + sT + '&limit=100';
		let url2 = 'https://api.spreaker.com/v2/search?type=episodes&q=' + sT + '&limit=100';
		let showArray = [];
		let episodeArray = [];
		axios.get(url1).then((response)=>{
			
           showArray = response.data.response.items;
		})
		axios.get(url2).then((response)=>{
	
           episodeArray = response.data.response.items;
		
        })
	   
			
		
		  setTimeout(() =>{
					
            let combinedArray = [...showArray, ...episodeArray]
           
			this.props.submitSearch(combinedArray);
			  
			this.props.history.push('layout');
          },2000)
		
		
		
	}
	
	
	
		 
		
	
	
	
	render() {
        
       
        
	return (
		this.state.clicked ?
		<div className="dash">
		
			<Navbar />
	<div className="dash container center">
		
		<form onSubmit={this.handleSubmit}>
				<h5 className="grey-text text-darken-3">Search Podcasts</h5>
				<div className="input-field">
					<label className="searchLabel" htmlFor="search" >Search by Keyword</label>
					<input type="search" id="search" onChange={this.handleSearchChange} />
					<button type="submit" className="btn-floating btn-large waves-effect waves-light purple darken-4"><i className="material-icons">GO</i></button>
				</div>
			</form>
		</div>
        <FeaturedStrip />
      
		<Spinner />

		</div>
		
		:
		<div className="dash">
			<Navbar />
	<div className="container center">
		<form onSubmit={this.handleSubmit}>
				<h5 className="grey-text text-darken-3">Search Podcasts</h5>
				<div className="input-field">
					<label className="searchLabel" htmlFor="search" >Search by Keyword</label>
					<input type="search" id="search" onChange={this.handleSearchChange} />
					<button type="submit" className="btn-floating btn-large waves-effect waves-light purple darken-4" onClick={this.isClicked}><i className="material-icons">GO</i></button>
				</div>
			</form>
		</div>
        <FeaturedStrip />
		
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
		showNum: state.showNum
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        submitSearch: (combinedArray) => {dispatch({type: 'SUBMITSEARCH', combinedArray: combinedArray})},
		sendSearchString: (val) => {dispatch({type: 'SENDSEARCH', searchTerm: val})},
		getFeatured: (featuredArray) => {dispatch({type: 'GETFEATURED', featuredArray: featuredArray})}
	
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);