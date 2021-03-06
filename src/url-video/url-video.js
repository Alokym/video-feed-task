import './url-video.scss';

class VideoController {
	constructor($sce) {
		this.sce = $sce;
	}

	$onInit() {
		this.url = this.sce.trustAsResourceUrl(this.video.url);
	}
}

const UrlVideo = {
	template: require('./url-video.html'),
	controller: VideoController,
	bindings: {
		video: '<'
	}
}

export default UrlVideo;