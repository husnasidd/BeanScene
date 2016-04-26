
describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('starter.controllers'));
    // beforeEach(angular.mock.module('starter'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('KnowledgeCtrl', {$scope: scope});
    }));

    // tests start here
    it('should have friends enabled', function(){
        expect(scope.settings.enableFriends).toEqual(true);
    });
});