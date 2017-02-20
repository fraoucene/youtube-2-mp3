function kind(state = [], action) {
    switch(action.type) {
        case 'SET_KIND' :
            return action.kind;
        default:
            return state;
    }
  return state;
}

export default kind;