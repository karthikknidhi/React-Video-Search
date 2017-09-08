import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search';
import Videolist from './components/video-list';
import Viddetails from './components/video-detail';
import _ from 'lodash';
const API_Key = 'AIzaSyCSy_scjgOl-mNi-izEAFZfxHnmiKX4spw';


// create a new component that produces html
// since we have to persist sate of the youtube data that keeps changing we use class based components

class App extends Component{
	
constructor(props){
super(props);
this.state = {
videos:[],
selectedVideo : null
};

this.videoSearch('SurfBoard');
}


videoSearch(term){

YTSearch({key:API_Key,term:term}, (videos)=>{
	
	this.setState({
	videos: videos,
	selectedVideo : videos[0]
	});
});
}


render(){
	const videoSearch = _.debounce(term => {this.videoSearch(term)},500);
	return (
	<div> 
	<SearchBar onVideoSearch = {videoSearch}/>
	<Viddetails videos = {this.state.selectedVideo}/>
	<Videolist onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
	videos = {this.state.videos}/>
	</div>
	) // jsx .. 
}
}

//putting all the components in the dom
ReactDOM.render(<App />, document.querySelector('.container'));