import React from 'react';
import VideoPlayer from './VideoPlayer';
import { Link } from 'react-router';

var PlayList = React.createClass({
	
	propTypes: {

  	},

  	getInitialState: function() {
        return {showVideo: false};
    },
  	
  	onShowVideo: function () {
  		this.setState({showVideo : true})
  	},
	
  	dotDotDot: function(playlist) {
  		return playlist.snippet.title.length > 45 ? "..." : "";
  	},
	
	render() {
		const { playList, i } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap" onClick={this.onShowVideo}>
					<div onClick={this.onShowVideo}>
						<VideoPlayer 
							{...this.props}
							showVideo={this.state.showVideo}
							id={playList.id}
							url={playList.url}
							type={this.props.kind}
							img={playList.image}
							play={1}
							height={180}
							width={220}
					  	/>
					</div>
				</div>

				<figcaption>
		          	<p className="title-grid-wrap">{playList.title}</p>
		          	<div className="control-buttons">
			            <Link className="button" to={`/playlists/${playList.id}`}>
			                <span className="btn-fb"></span>
			            </Link>
			            <Link className="button" to={`/playlists/${playList.id}`}>
			                <span className="btn-tweeter"></span>
			            </Link>
{/*			            <button className="button" onClick={this.onShowVideo}>
			                <span className="fa fa-play"></span>
			            </button>*/}
			            <Link className="button" onClick={this.props.searchTubes.bind(null, "playlist" , playList.id, "")} to={playList.url}>
			                <span className="btn-download"></span>
			            </Link>
		          	</div>
        		</figcaption>
			</figure>
		);
	}

});

export default PlayList;