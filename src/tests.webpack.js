// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';

const context = require.context('./app', true, /\.js$/);
const contextVideo = require.context('./video-item', true, /\.js$/);
const contextYoutubeVideo = require.context('./youtube-video', true, /\.js$/);

context.keys().forEach(context);
contextVideo.keys().forEach(contextVideo);
contextYoutubeVideo.keys().forEach(contextYoutubeVideo);

