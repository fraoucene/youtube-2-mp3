function querySearch(state = [], action) {
    switch(action.type) {
        case 'SET_QUERY_SEARCH' :
            return action.querySearch;
        default:
            return state;
    }
  return state;
}

export default querySearch;