import React from 'react';
import { Link } from 'react-router';

import  *  as CONSTANTS from "../api/constants";

const VideoPlayer = ({...props }) => {
	const videoUrl = "/" + props.id +"?autoplay=" + props.play;
	const playListUrl = "?listType=user_uploads&autoplay=" + props.play + "&list="+ props.id;
	const postUrl =  props.type === "video" ? videoUrl : playListUrl;
	
	if (props.type != "video") {
		return <Link onClick={props.searchTubes.bind(null, "playlist" , props.id, "")} to={props.url}>
			<img src={props.img} alt={props.img} height={props.height} width="100%" frameBorder="0" />
        </Link>;
	}
	
	return props.showVideo ? <iframe 
			src={CONSTANTS.Y_VIDEOS_EMBED_URL + postUrl} height={props.height} width ={props.width} frameBorder="0">
	</iframe> : <img src={props.img} alt={props.img} height={props.height} width="100%" frameBorder="0" />;

};

export default VideoPlayer;