import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'
import Scrollbar from 'react-scrollbars-custom';
import {Router,Link} from 'react-router-dom';
const FeaturedStrip = (props) => {
   
     let featured = props.featuredArray.map((val, ind) => {
            
            return (
                <Link to={'/player' + ind} key={ind} onClick={props.showNum}>
				<ReactTooltip />
                <div className="featuredpod" data-tip={val.title}>
				<img src={val.image_url} />
				</div>
				<label className="featuredLabel">{val.title}</label>
				</Link>
            )
        })
	 
	 

    
    return(
		<div className="animated slideInLeft">
		<h4 className="featuredTitle center">Featured Podcasts</h4>
		<Scrollbar style={ {width: '100%', minHeight: 290} } >
    <section className="featuredStrip">
		
		
        {featured}
		
        </section>
     </Scrollbar>
 		</div>
        )
}


const mapStateToProps = (state) => {
	return {
		searchTerm: state.searchTerm,
		showArray: state.showArray,
		episodeArray: state.episodeArray,
		combinedArray: state.combinedArray,
        featuredArray: state.featuredArray,
		lastSearch: state.lastSearch,
		showNum: state.showNum
	}
}

export default connect(mapStateToProps)(FeaturedStrip);