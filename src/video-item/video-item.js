import './video-item.scss';

class VideoItemController {
	constructor() {}
}

const VideoItemComponent = {
	template: require('./video-item.html'),
	controller: VideoItemController,
	bindings: {
		video: '<'
	}
}

export default VideoItemComponent;