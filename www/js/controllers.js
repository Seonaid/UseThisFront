angular.module('starter.controllers', ['ngStorage'])

.controller('FridgeCtrl', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage) {
	  // $scope.fridge = []; // pretty sure this doesn't do anything.
	// initial foods object is retrieved with the user on login

	console.log('Do I have the food? ' + JSON.stringify($localStorage.foods));
	$scope.foods = $localStorage.foods;

}])

.controller('AddFoodCtrl', ['$scope', 'AddFoodService', function($scope, AddFoodService) {
	$scope.data = {};

	$scope.addFood = function(){ 
		AddFoodService.addFood($scope.data.foodName, $scope.data.how_many, $scope.data.time_period)
			.success(function(data){
				state.go('tab.add-food');
				$scope.reset(); // probably need to actually do a $scope.reset ?
			}).error(function(data){
	            var alertPopup = $ionicPopup.alert({
                title: 'tragedy!',
                template: 'still not working!'
			});
			})}
		}

])


// local login copied from simple_login

.controller('LoginCtrl', ['$scope', 'LoginService', '$ionicPopup', '$state', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.loginUser = function() {
        LoginService.loginUser($scope.data.email, $scope.data.password)
        	.success(function(data) {
				console.log('from LoginCtrl' + JSON.stringify.data);
	            $state.go('tab.fridge');
	        }).error(function(data) {
	            var alertPopup = $ionicPopup.alert({
	                title: 'Login failed!',
	                template: 'Please check your credentials!'
	            });
	        })
    }
}])

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
