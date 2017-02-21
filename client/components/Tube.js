import React from 'react';
import numeral from '../utils/numeral';
import { Link } from 'react-router';
import VideoPlayer from './VideoPlayer';

numeral.locale('fr');
var Tube = React.createClass({
	
	propTypes: {

	},

	getInitialState: function() {
        return {showVideo: false};
    },
  	
  	onShowVideo: function () {
  		this.setState({showVideo : true})
  	},
	
	render() {
		const { tube, i } = this.props;
		return (
			<figure className="single-photo">
				<div className="grid-photo-wrap">
					<div onClick={this.onShowVideo}>
						<VideoPlayer 
							showVideo={this.state.showVideo}
							id={tube.id}
							img={tube.image}
							type="video"
							play={1}
							height={180}
							width={220}
					  	/>
					</div>
					<div className="title-wrap">
						<p>
							{ i+1 + " - " + tube.title}
						</p>
						<p className="watch-view-count right">
	        				{ numeral(tube.statistics.viewCount).format('0,0') } vues
	        				</p>
		          		</div>
					<div className="control-buttons">
					    <div className="button">
						<span className="btn-fb"></span>
					    </div>
					    <div className="button" >
						<span className="btn-tweeter"></span>
					    </div>
					    <div className="button" onClick={this.onShowVideo}>
						<span className="fa fa-play"></span>
					    </div>
					    <div className="download">
						<iframe scrolling="no"  src={"//www.youtubeinmp3.com/fr/widget/button/?video=https://www.youtube.com/watch?v=" + tube.id + "&color=cc1f5e" } />
					    </div>
					</div>
				</div>	
			</figure>
		);
	}

});

export default Tube;
