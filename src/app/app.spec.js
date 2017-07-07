import app from './app';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;
    let element;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($compile, $rootScope) => {
        element = $compile('<app></app>')($rootScope)[0];
        $rootScope.$digest();
      });
    });

    it('should contain the starter url', () => {
      expect(element.querySelector('div').innerText).toBe('It works!');
    });
  });
});