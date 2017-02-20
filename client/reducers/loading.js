function loading(state = false, action) {
	switch (action.type) {
		case 'FETCH_PLAY_LIST':
			return true
		case 'FETCH_TUBES_LIST':
			return true
		case 'FETCH_TUBES_RECEIVED':
			return false
		case 'FETCH_PLAY_LIST_RECEIVED':
			return false
		case 'FETCH_CHANNELS_RECEIVED':
			return false
		case 'FETCH_DATA_ERROR':
			return false
		default:
			return state
		}
}

export default loading;