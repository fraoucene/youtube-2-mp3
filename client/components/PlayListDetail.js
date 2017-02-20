import React from 'react';
import Tube from './Tube';
import Paginator from './Paginator';
import Top from './Top';
import { Link } from 'react-router';
import  { API_PLAYLIST_TYPE } from "../api/constants";

const PlayListDetail = React.createClass({

	getTubes : function(token) {

		if (this.props.params.playlistId) {
			console.log("componentDidMount searchTubes 1")
			return this.props.searchTubes("playlist" ,this.props.params.playlistId, token);
		} else {
			console.log("componentDidMount searchTubes 2")
			this.props.searchPlayLists(this.props.querySearch, "video", token);
		}
	},

	getPlayListById: function(playlists, id) {
		return playlists.filter((playlist)=>playlist.id === id)[0];
	},

	render() {
		let data = this.props.kind === API_PLAYLIST_TYPE ? this.getPlayListById(this.props.playLists.items, this.props.params.playlistId) : this.getPlayListById(this.props.channels.items, this.props.params.playlistId); 
		return (
			<div>
				<Top
					data={data}
					kind= {this.props.kind}
				 />
				<div className="photo-grid">
				 	{this.props.tubes.items.map((tube, i) => <Tube {...this.props} key={i} i={i} tube={tube} statistics={this.props.tubes.statistics} />)}
	      		</div>
	      		<Paginator
					next={!this.props.tubes.nextPageToken}
					prev={!this.props.tubes.prevPageToken}
					getNext={this.getTubes.bind(null, this.props.tubes.nextPageToken)}
					getPrev={this.getTubes.bind(null, this.props.tubes.prevPageToken)}
				/>
			</div>

		);
	}

});

export default PlayListDetail;
