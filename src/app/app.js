import 'bootstrap';
import angular from 'angular';

//TODO MP: consider moving video components to one folder
import VideoItemComponent from '../video-item/video-item.js'
import YoutubeVideo from '../youtube-video/youtube-video.js'
import FbVideo from '../fb-video/fb-video.js'
import UrlVideo from '../url-video/url-video.js'

import ViewsFilter from '../video-item/view-number-formatter.filter.js'

import AppService from './app.service.js'

import './app.scss';

//TODO MP: learn everything about export
//TODO MP: consider making app just an entry point, probably make videofeed component?
//TODO MP: write unit tests

class AppController {
  constructor(AppService) {
    //TODO MP: 'ngInject'?
    'ngInject';

    this.AppService = AppService;
  }

  $onInit() {
     this.AppService.fetchVideoFeed()
      .then(videoItems => {
        this.videoItems = videoItems
      });
  }
}

const app = {
  template: require('./app.html'),
  controller: AppController
};

const MODULE_NAME = 'pbVideoFeed';

angular.module(MODULE_NAME, [])
  .component('videoItem', VideoItemComponent)
  .component('youtubeVideo', YoutubeVideo)
  .component('urlVideo', UrlVideo)
  .component('fbVideo', FbVideo)
  .component('app', app)

  .service('AppService', AppService)

  .filter('viewsFilter', ViewsFilter);

export default MODULE_NAME;