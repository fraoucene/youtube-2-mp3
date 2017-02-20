import React from 'react';
import PlayList from './PlayList';
import Paginator from './Paginator';

import { Link } from 'react-router';
import { LIMIT_VALUE, API_CHANNEL_TYPE } from '../api/constants';

const ChannelsGird = React.createClass({

	componentDidMount: function() {
		this.props.setKind(API_CHANNEL_TYPE);
	},

	render() {
		return (
			<div id="channels">
				<div className="photo-grid">
				 	{this.props.channels.items.map((channel, i) => <PlayList {...this.props} key={i} i={i} playList={channel} />)}
	      		</div>
	      		<Paginator
					next={!this.props.channels.nextPageToken}
					prev={!this.props.channels.prevPageToken}
					getNext={this.props.searchPlayLists.bind(null, this.props.querySearch, "channel", this.props.channels.nextPageToken)}
					getPrev={this.props.searchPlayLists.bind(null, this.props.querySearch, "channel", this.props.channels.prevPageToken)}
				/>
      		</div>
		);
	}
});

export default ChannelsGird;