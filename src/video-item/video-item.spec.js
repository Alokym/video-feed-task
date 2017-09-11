import app from '../app/app';

describe('Video item', () => {
  describe('Normal video item: ', () => {
    let element;
    let scope;

    beforeEach(() => {
      angular.mock.module(app);
      angular.mock.inject(($compile, $rootScope) => {
        scope = $rootScope.$new();
        element = angular.element('<video-item data-video="video"></video-item>');
        element = $compile(element)(scope)[0];
        scope.video = {
          title: 'Test title',
          type: 'video',
          source: 'url',
          url: 'http://cdn.playbuzz.com/content/feed/video-1.mp4',
          views: 8820872
        };

        scope.$apply();
      });
    });

    it('should properly display video header', () => {
      expect(element.querySelectorAll('video-item .panel-heading .pull-left')[0].innerText).toBe('Test title');
    });

    it('should properly format video views', () => {
      expect(element.querySelectorAll('video-item .panel-heading .pull-right')[0].innerText).toBe('8.8M views');
    });
  });

  describe('Video item with missing data: ', () => {
    let element;
    let scope;

    beforeEach(() => {
      angular.mock.module(app);
      angular.mock.inject(($compile, $rootScope) => {
        scope = $rootScope.$new();
        element = angular.element('<video-item data-video="video"></video-item>');
        element = $compile(element)(scope)[0];
        scope.video = {
          type: 'video',
          source: 'url',
          url: 'http://cdn.playbuzz.com/content/feed/video-1.mp4'
        };

        scope.$apply();
      });
    });

    it('should properly display video header', () => {
      expect(element.querySelectorAll('video-item .panel-heading .pull-left')[0].innerText).toBe('Unknown title');
    });

    it('should properly format video views', () => {
      expect(element.querySelectorAll('video-item .panel-heading .pull-right')[0].innerText).toBe('Unknown number of views');
    });
  });

});