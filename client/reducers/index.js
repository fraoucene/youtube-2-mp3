import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import playLists from './playLists';
import tubes from './tubes';
import channels from './channels';
import loading from './loading';
import kind from './kind';
import querySearch from './querySearch';

const rootReducer = combineReducers({ playLists, tubes, channels, kind, querySearch, loading, routing: routerReducer });

export default rootReducer;
