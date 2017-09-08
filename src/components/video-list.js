import React from 'react';
import Videolistitem from './videolistitem';


const Videolist = (props) =>{

	const videosit = props.videos.map((data)=>{

		return <Videolistitem onVideoSelect = {props.onVideoSelect} key = {data.etag}  video = {data}/>;

	});



return(
	<ul className = "col-md-4 list-group">
	{videosit}
	</ul>
	);
} 


export default Videolist;