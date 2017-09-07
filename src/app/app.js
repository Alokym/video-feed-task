import angular from 'angular';

import './app.scss';

class AppController {
  $onInit() {
    this.message = 'It works!';

    fetch('https://cdn.playbuzz.com/content/feed/items')
      .then(res => res.json())
      .then(feed => console.log(feed));

	//URL http://cdn.playbuzz.com/content/feed/video-1.mp4
	//Facebook 1052114818157758
	//Youtube h8MbhS5XKow
  }
}

let app = {
  template: require('./app.html'),
  controller: AppController
};

const MODULE_NAME = 'pbVideoFeed';

angular.module(MODULE_NAME, [])
  .component('app', app);

export default MODULE_NAME;