function playLists(state = [], action) {
    switch(action.type) {
        case 'FETCH_PLAY_LIST_RECEIVED' :
            return action.data;
        default:
            return state;
    }
 
  return state;
}

export default playLists;