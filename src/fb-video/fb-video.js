class VideoController {
	constructor($sce) {
		this.sce = $sce;
	}

	$onInit() {
		this.url = this.sce.trustAsResourceUrl(`https://www.facebook.com/facebook/videos/${this.video.videoId}/`);
	}
}

//TODO MP: check youtube video existing
const FbVideo = {
	template: require('./fb-video.html'),
	controller: VideoController,
	bindings: {
		video: '<'
	}
}

export default FbVideo;