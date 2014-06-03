function filterShows (allShows){
	return allShows.filter(function(show){
		return (show.drm == true && show.episodeCount > 0);
	});
}

function transformShows(filteredShows){
	var newShows = [];
	filteredShows.forEach(function(show){
		newShows.push({
			title: show.title?show.title:"",
			slug: show.slug?show.slug:"",
			image: show.image?(show.image.showImage?show.image.showImage:""):""
		});
	});
	return newShows;
}

function getShows(allShows){
	if (allShows == undefined) return [];
	var filteredShows = filterShows(allShows);
	return transformShows(filteredShows);
}

exports.getShows = getShows;
