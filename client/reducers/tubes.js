function tubes(state = [], action) {
    switch(action.type) {      
        case 'FETCH_TUBES_RECEIVED':
            return action.data;
        default:
            return state;
    }
 
  return state;
}

export default tubes;