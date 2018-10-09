const initState = {
	searchTerm: '',
	showArray: [],
	episodeArray: [],
	combinedArray: [],
    featuredArray: [],
	lastSearch: ''
	
	
}


const rootReducer = (state = initState, action) => {
	if(action.type === 'SENDSEARCH') {
   
		let str = action.searchTerm;	
		return {
			searchTerm: str,
			showArray: [],
			episodeArray: [],
			combinedArray: [],
            featuredArray: state.featuredArray,
			lastSearch: str
	
		}
	}
   else if(action.type === 'SUBMITSEARCH') {
	   	let str = state.lastSearch;
	
        let combArr = action.combinedArray;
        return {
            searchTerm: '',
            showArray: [],
            episodeArray: [],
            combinedArray: combArr,
            featuredArray: [],
			lastSearch: str
	
        }
     
    }
    
    else if(action.type === 'GETFEATURED') {
        let featuredArray = action.featuredArray;
        return {
            searchTerm: '',
	        showArray: [],
	        episodeArray: [],
	        combinedArray: [],
            featuredArray:featuredArray,
	        lastSearch: ''
	
        }
    }
    
	return state;
}

export default rootReducer;