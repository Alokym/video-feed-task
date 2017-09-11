import './youtube-video.scss';

class VideoController {
	constructor($sce, $http) {
		this.sce = $sce;
		this.http = $http
	}

	$onInit() {
		const videoId = this.video.videoId;

		this.checkVideoExists(videoId).then(exists => {
			this.exists = exists;
			this.url = this.sce.trustAsResourceUrl(`https://www.youtube.com/embed/${this.video.videoId}`);
		})
	}

	checkVideoExists(videoId) {
		//I admit, that storing API key here isn't secure way of doing stuff. This is done intentiaonally for demo purpose
		return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=id&id=${videoId}&key=AIzaSyCaEGKqs5fkqP5y6jrRMMebYr9cke7iFoU`)
			.then(res => res.data.items.length > 0);
	}
}

const YoutubeVideo = {
	template: require('./youtube-video.html'),
	controller: VideoController,
	bindings: {
		video: '<'
	}
}

export default YoutubeVideo;