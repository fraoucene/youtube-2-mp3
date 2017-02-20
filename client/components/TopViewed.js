import React from 'react';
import { Link } from 'react-router';

const TopViewed = ({...props}) => {

	return <div className="top-viewed">
        <Link to="/"><i className="fa fa-chevron-right" aria-hidden="true"></i> Top video</Link>
        <Link to="/video"><i className="fa fa-chevron-right" aria-hidden="true"></i> Top playlist</Link>
    </div>;
}

export default TopViewed;

//example de requetr
//https://www.googleapis.com/youtube/v3/search?part=id&order=viewCount&publishedAfter=1000-01-01T00%3A00%3A00Z&publishedBefore=2017-02-09T00%3A00%3A00Z&key=AIzaSyClnryKoujn0DJpRaMyOzzyyrTVktT9Ki0&type=playlist