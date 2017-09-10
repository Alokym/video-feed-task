import './video-item.scss';

//TODO MP: add eslint
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

//TODO MP: learn about export default and why it is needed here
export default VideoItemComponent;