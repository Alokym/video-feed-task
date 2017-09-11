import app from './app';

describe('app', () => {
  describe('AppCtrl', () => {
    let element;
    let backend;

    beforeEach(() => {
      angular.mock.module(app);
      angular.mock.inject(($compile, $rootScope, $httpBackend) => {
        $httpBackend.whenGET('https://cdn.playbuzz.com/content/feed/items').respond({
          items: [{
            "title": "Test title",
            "type": "video",
            "source": "url",
            "url": "http://cdn.playbuzz.com/content/feed/video-1.mp4",
            "views": 8820
          }, {
            "title": "Test title 2",
            "type": "video",
            "source": "url",
            "url": "http://cdn.playbuzz.com/content/feed/video-1.mp4",
            "views": 18965
          }]
        });
        $httpBackend.whenGET('/^https:\/\/youtube.com\/.*/').respond({})
        element = $compile('<app></app>')($rootScope)[0];
        $httpBackend.flush();
        $rootScope.$digest();
      });
    });

    it('should contain proper header', () => {
      expect(element.querySelector('nav').innerText.trim()).toBe('video feed');
    });

    it('should build proper number of video items', () => {
      expect(element.querySelectorAll('video-item').length).toBe(2);
    })
  });
});