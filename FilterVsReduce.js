function() {
return movieLists.concatMap(function(movieList) {
return movieList.videos.concatMap(function(video) {	
return video.boxarts.
			  filter(function(boxart) 
			  {return boxart.width === 150;}).map(function(boxart) {
				return {id: video.id, title: video.title, boxart: boxart.url};});});});


function() {
return movieLists.concatMap(function(movieList) {
	  return movieList.videos.concatMap(function(video) {
	    return video.boxarts.
		  reduce(function(acc,curr) {
			if (acc.width * acc.height < curr.width * curr.height) {
			  return acc;
			}
			else {
			  return curr;
			}
		  }).
		  map(function(boxart) {
			return {id: video.id, title: video.title, boxart: boxart.url};
		  });
	  });
	});
