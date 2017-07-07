import angular from 'angular';

import './app.scss';

class AppController {
  $onInit() {
    this.message = 'It works!';
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