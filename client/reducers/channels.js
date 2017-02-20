function channels(state = [], action) {
    switch(action.type) {
        case 'FETCH_CHANNELS_RECEIVED' :
            return action.data;
        default:
            return state;
    }
 
  return state;
}

export default channels;