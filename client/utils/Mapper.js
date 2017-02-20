export function tubesMapper(kind, tubes, statistics) {
	return tubes.map((tube)=> {
		let tubeMapped = {};
		let id = kind==="video" ? tube.id.videoId : tube.snippet.resourceId.videoId;
		tubeMapped.id = id;
		tubeMapped.title = tube.snippet.title;
		tubeMapped.image = tube.snippet.thumbnails.high.url;
		tubeMapped.statistics = getStatisticsById(statistics, id);
		return tubeMapped;
	});
};

export function playListMapper(playlists) {
	return playlists.map((playlist)=> {
		let playlistMapped = {};
		let id = playlist.id.playlistId;
		playlistMapped.id = id;
		playlistMapped.title = playlist.snippet.title.substring(0,45) + dotDotDot(playlist.snippet.title);
		playlistMapped.image = playlist.snippet.thumbnails.high.url;
		playlistMapped.description = playlist.snippet.description;
		playlistMapped.url = '/playlist/' + id;
		return playlistMapped;
	});
};

export function channelMapper(channels) {
	return channels.map((channel)=> {
		let channelMapped = {};
		let id = channel.id.channelId.replace(/^.{2}/g, 'UU');
		channelMapped.id = id;
		channelMapped.title = channel.snippet.title.substring(0,45) + dotDotDot(channel.snippet.title);
		channelMapped.image = channel.snippet.thumbnails.medium.url;
		channelMapped.description = channel.snippet.description;
		channelMapped.url = '/channel/' + id;
		return channelMapped;
	});
};




function getStatisticsById(statistics, id) {
	return statistics.filter((stats)=>stats.id ===id)[0].statistics;
}

function dotDotDot(title) {
	return title.length > 45 ? "..." : "";
}