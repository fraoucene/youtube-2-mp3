import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import dataService from './api'


// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {
  	playLists : {items:[]},
  	tubes : {items:[]},
  	channels : {items:[]},
  	kind: "video",
  	querySearch: "Top des titres – France",
  	loading: false
};

const store = createStore(rootReducer, defaultState, applyMiddleware(dataService));
export const history = syncHistoryWithStore(browserHistory, store);

export default store;