import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import fetchHeros from "../api";
import NavBar from "./NavBar";
import BackToTop from "./BackToTop";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

const Main = React.createClass({

	componentDidMount: function() {
		this.props.searchPlayLists(this.props.querySearch, "playlist", "");
		this.props.searchPlayLists(this.props.querySearch, "channel", "");

		if (this.props.params.playlistId) {
			return this.props.searchTubes("playlist" ,this.props.params.playlistId, "");
		} else {
			this.props.searchPlayLists(this.props.querySearch, "video", "");
		}
	},
	
	render() {
		let overlayClass = classnames({
            'overlay-mask overlay-mask-loader': true,
            'overlay-mask--hidden': !this.props.loading,
        });
		return (
			<div>
		        <NavBar {...this.props} />
	        	<SearchEngine {...this.props} />
	         	<BackToTop />
	         	{React.cloneElement(this.props.children, this.props)}

                <Footer />
      			<div className={overlayClass}>
                	<img alt="Nous chargeons les nouvelles données" className="overlay-loader" src={require('../img/ajax-preloader.gif')} />
            	</div>
            	
      		</div>
		);
	}

});

export default Main;