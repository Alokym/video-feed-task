import app from '../app/app';

describe('Youtube video item', () => {
  let element;
  let scope;
  let backend;
  let validVideoMock = {
     items: [{
      kind: "youtube#video",
      etag: "\"m2yskBQJythfE4irbTIeOgYYfBU/XIzBvFdvqBSWsFEyekUxUqIASJ8\"",
      id: "Fhskvloj1gE"
    }]
  };
  let invalidVideoMock = {
    items: []
  };

  describe('Existing video item: ', () => {
    beforeEach(() => {
      angular.mock.module(app);
      angular.mock.inject(($compile, $rootScope, $httpBackend) => {
        backend = $httpBackend;
        scope = $rootScope.$new();
        scope.video = {
          title: 'Test title',
          type: 'video',
          source: 'youtube',
          videoId: 'Fhskvloj1gE',
          views: 1543651
        };
        backend.whenGET(/^https:\/\/www.googleapis.com.*/).respond(validVideoMock);
        element = angular.element('<youtube-video data-video="video"></youtube-video>');
        element = $compile(element)(scope)[0];
        backend.flush();
      });
    });

    it('should properly set video url', () => {
      expect(element.querySelector('iframe').src).toBe('https://www.youtube.com/embed/Fhskvloj1gE')
    });

    afterEach(() => {
      backend.verifyNoOutstandingExpectation();
      backend.verifyNoOutstandingRequest();
    });
  });

  describe('Invalid youtube video: ', () => {
    let element;
    let scope;

    beforeEach(() => {
      angular.mock.module(app);
      angular.mock.inject(($compile, $rootScope, $httpBackend) => {
        backend = $httpBackend
        scope = $rootScope.$new();
        scope.video = {
          title: 'Non-existing-video',
          type: 'video',
          source: 'youtube',
          videoId: 'wrong-id',
          views: 4245322
        };
        backend.whenGET(/^https:\/\/www.googleapis.com.*/).respond(invalidVideoMock);
        element = angular.element('<youtube-video data-video="video"></youtube-video>');
        element = $compile(element)(scope)[0];
        backend.flush();
      });
    });

    it('should notify a user that video isn\'t', () => {
      expect(element.querySelector('iframe')).toBe(null);
      expect(element.querySelector('.alert-danger').innerText).toBe('Youtube video is missing');
    });

    afterEach(() => {
      backend.verifyNoOutstandingExpectation();
      backend.verifyNoOutstandingRequest();
    });
  });

});