describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('starter.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('KnowledgeCtrl', {$scope: scope});
    }));

    // tests start here
    it('should set modal two to show', function(){
        expect(scope.settings.enableFriends).toEqual(true);
    });
});