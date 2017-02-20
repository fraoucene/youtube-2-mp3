import React from 'react';
import TopViewed from './TopViewed';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import { API_VIDEO_TYPE, API_CHANNEL_TYPE, API_PLAYLIST_TYPE } from '../api/constants';

var SearchEngine = React.createClass({
  
    onClick: function() {
        if (this.props.kind != API_PLAYLIST_TYPE && this.props.kind != API_CHANNEL_TYPE ) {
            this.props.searchPlayLists(this.props.querySearch, API_VIDEO_TYPE, "");
            browserHistory.push("/video");
        }
        this.props.searchPlayLists(this.props.querySearch, this.props.kind, "");
    },
    
    render() {  
        return (<section className = "search-engine">
            <h2 className="borderTtl white">
                <span>Recherchez un titre sur</span>
                <br />
                <strong> Youtube </strong>      
            </h2>
            <p className="intro">
                Chercher vos playList et videos préfèrées   
            </p>

            <div className="search-wrap row">
                <div className="col-sm-10">
                    <input type="text" value={this.props.querySearch} onChange={(e)=>this.props.setQuerySearch(e.target.value)} className="form-control" placeholder="Titre, PlayLists, Videos, Channels..." />
                </div>
                <button className="col-sm-2 btn" onClick={this.onClick}> Chercher</button>
            </div>
            <TopViewed />
        </section>);
    }
});


export default SearchEngine;