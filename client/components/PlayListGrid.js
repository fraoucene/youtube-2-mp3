import React from 'react';
import PlayList from './PlayList';
import Paginator from './Paginator';
import { Link } from 'react-router';
import { LIMIT_VALUE, API_PLAYLIST_TYPE } from '../api/constants';

const PlayListGrid = React.createClass({

	componentDidMount: function() {
		this.props.setKind(API_PLAYLIST_TYPE);	
	},

	render() {
		return (
			<div>
				<div className="photo-grid">
				 	{this.props.playLists.items.map((playList, i) => <PlayList {...this.props} key={i} i={i} playList={playList} />)}
	      		</div>
				<Paginator
					next={!this.props.playLists.nextPageToken}
					prev={!this.props.playLists.prevPageToken}
					getNext={this.props.searchPlayLists.bind(null, this.props.querySearch, "playlist", this.props.playLists.nextPageToken)}
					getPrev={this.props.searchPlayLists.bind(null, this.props.querySearch, "playlist", this.props.playLists.prevPageToken)}
				/>
      		</div>
		);
	}
});

export default PlayListGrid;