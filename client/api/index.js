import axios from 'axios';
import * as Mapper from '../utils/Mapper';
import  *  as CONSTANTS from "./constants";

const dataService = store => next => action => {
  	next(action)
  	switch (action.type) {
		case "FETCH_PLAY_LIST":
			getPlayLists(next, action);
			break
		case "FETCH_TUBES_LIST":
			getTubes(next, action);
			break
	  	default:
	    	break
  	}

};

function getPlayLists(next, action) {
	axios.get(
		CONSTANTS.Y_BASE_URL + CONSTANTS.Y_SEARCH_URL,
		{
	     headers: {
	        'Accept': 'application/json'
	      },
	     params: {
	    	[CONSTANTS.API_PART]: CONSTANTS.API_SNIPPET_PART,
	    	[CONSTANTS.API_QUERY]: action.querySearch,
	    	[CONSTANTS.API_TYPE]: action.kind,
	    	[CONSTANTS.API_KEY]: CONSTANTS.API_KEY_VALUE,
	    	[CONSTANTS.MAX_RESULTS]: CONSTANTS.MAX_RESULTS_VALUE,
	    	[CONSTANTS.API_PAGE_TOKEN]: action.nextPageToken,
	  	}
	})
	.then((res, err) => {
        if (err) {
          return next({
            type: 'FETCH_DATA_ERROR',
            err
          })
        }
        const data = res.data;
    	switch (action.kind) {

			case CONSTANTS.API_VIDEO_TYPE:
				return getTubeStatistics(next, data, action);

			case CONSTANTS.API_CHANNEL_TYPE:
				data.items =  Mapper.channelMapper(data.items);
				return next({
		          	type: 'FETCH_CHANNELS_RECEIVED',
		          	data
		    	});
	    	case CONSTANTS.API_PLAYLIST_TYPE:
				data.items =  Mapper.playListMapper(data.items);
				return next({
		          	type: 'FETCH_PLAY_LIST_RECEIVED',
		          	data
		    	});

			default:
				break
		}
  	})
}

function getTubes(next, action) {
	axios.get(
		CONSTANTS.Y_BASE_URL + CONSTANTS.Y_PLAY_LIST_ITEMS_URL,
	{
	     headers: {
	        'Accept': 'application/json'
	      },
	     params: {
	    	[CONSTANTS.API_PART]: CONSTANTS.API_SNIPPET_PART,
	    	[CONSTANTS.API_PLAYLIST_ID]: action.playlistId,
	    	[CONSTANTS.API_KEY]: CONSTANTS.API_KEY_VALUE,
	    	[CONSTANTS.MAX_RESULTS]: CONSTANTS.MAX_RESULTS_VALUE,
	    	[CONSTANTS.API_PAGE_TOKEN]: action.nextPageToken,
	  	}
	})
	.then((res, err) => {
        if (err) {
          return next({
            type: 'FETCH_DATA_ERROR',
            err
          })
        }
		getTubeStatistics(next, res.data, action);
  	})
}

function getTubeStatistics(next, data, action) {
	
	let ids = data.items.map((tube, i) => {
    	switch (action.kind) {
			case CONSTANTS.API_VIDEO_TYPE:
				return tube.id.videoId;
			case CONSTANTS.API_PLAYLIST_TYPE:
				return tube.snippet.resourceId.videoId;
			default:
				break
		}
	});

	axios.get(
		CONSTANTS.Y_BASE_URL + CONSTANTS.Y_VIDEOS_URL,
	{
	     headers: {
	        'Accept': 'application/json'
	      },
	     params: {
	    	[CONSTANTS.API_PART]: CONSTANTS.API_STATISTICS_PART,
	    	[CONSTANTS.API_KEY]: CONSTANTS.API_KEY_VALUE,
	    	[CONSTANTS.API_ID]: ids.join(',')
	  	}
	})
	.then((res, err) => {
        if (err) {
          return next({
            type: 'FETCH_DATA_ERROR',
            err
          })
        }
		
        data.items = Mapper.tubesMapper(action.kind, data.items, res.data.items);

        next({
          type: "FETCH_TUBES_RECEIVED",
          data
    	})
  	})
}

export default dataService