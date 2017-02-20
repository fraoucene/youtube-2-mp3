export function searchPlayLists(querySearch, kind, nextPageToken) {
    return {
        type: 'FETCH_PLAY_LIST',
        nextPageToken,
        kind,
        querySearch
    }
}

export function searchTubes(kind, playlistId, nextPageToken) {
    return {
        type: 'FETCH_TUBES_LIST',
        playlistId,
        nextPageToken,
        kind
    }
}

export function setKind(kind) {
    return {
        type: 'SET_KIND',
        kind
    }
}

export function setQuerySearch(querySearch) {
    return {
        type: 'SET_QUERY_SEARCH',
        querySearch
    }
}
