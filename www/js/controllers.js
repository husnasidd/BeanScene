angular.module('starter.controllers',['ionic'])

//.controller('HomeCtrl', function($scope), {
.controller('HomeCtrl',function($scope, $ionicModal){
           // console.log(placesList);
            //console.log("in dash..");
        
})



.controller('CoffeeShopListCtrl', function($scope, Shops) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
            
            
            
  $scope.shops = Shops.all();
  $scope.remove = function(shop) {
    Shops.remove(shop);
  };
            
            
            
})

.controller('CoffeeShopDetailCtrl', function($scope, $stateParams, Shops) {
  $scope.shop = Shops.get($stateParams.shopId);
})


.controller('ModalCtrl', function($scope, $ionicModal) {
            $ionicModal.fromTemplateUrl('photoModal.html', {
                                        id: '1',
                                        scope: $scope,
                                        animation: 'slide-in-up'
                                        }).then(function(modal) {
                                                $scope.modal1 = modal;
                                                });
            
            $ionicModal.fromTemplateUrl('wheelModal.html', {
                                        id: '2',
                                        scope: $scope,
                                        animation: 'slide-in-up'
                                        }).then(function(modal) {
                                                $scope.modal2 = modal;
                                                });
            
            $ionicModal.fromTemplateUrl('drinksModal.html', {
                                        id: '3',
                                        scope: $scope,
                                        animation: 'slide-in-up'
                                        }).then(function(modal) {
                                                $scope.modal3 = modal;
                                                });
            
            $ionicModal.fromTemplateUrl('brewingModal.html', {
                                        id: '4',
                                        scope: $scope,
                                        animation: 'slide-in-up'
                                        }).then(function(modal) {
                                                $scope.modal4 = modal;
                                                });
            
            $ionicModal.fromTemplateUrl('influenceModal.html', {
                                        id: '5',
                                        scope: $scope,
                                        animation: 'slide-in-up'
                                        }).then(function(modal) {
                                                $scope.modal5 = modal;
                                                });
            
            $ionicModal.fromTemplateUrl('blogModal.html', {
                                        id: '6',
                                        scope: $scope,
                                        animation: 'slide-in-up'
                                        }).then(function(modal) {
                                                $scope.modal6 = modal;
                                                });
     
            $scope.openModal = function(index) {
            if (index == 1) $scope.modal1.show();
            else if (index == 2) $scope.modal2.show();
            else if (index == 3) $scope.modal3.show();
            else if (index == 4) $scope.modal4.show();
            else if (index == 5) $scope.modal5.show();
            else $scope.modal6.show();
            };
            
            $scope.closeModal = function(index) {
            console.log("in hide");
            if (index == 1) $scope.modal1.hide();
            else if (index == 2) $scope.modal2.hide();
            else if (index == 3) $scope.modal3.hide();
            else if (index == 4) $scope.modal4.hide();
            else if (index == 5) $scope.modal5.hide();
            else $scope.modal6.hide();
            
            };
            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                       console.log("in destroy");
                       $scope.modal1.remove();
                       $scope.modal2.remove();
                       $scope.modal3.remove();
                       $scope.modal4.remove();
                       $scope.modal5.remove();
                       $scope.modal6.remove();
                       
                       });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                       // Execute action
                       });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                       // Execute action
                       });
})

.controller('KnowledgeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
            
  
});





