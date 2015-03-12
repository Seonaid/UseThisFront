angular.module('starter.controllers', [])

.controller('FridgeCtrl', ['$scope', '$http', function($scope, $http) {
	  $scope.fridge = [];

// Retrieve existing communities from Nerdique

  $http.get('http://localhost:3000/api/').then(function(response){
    console.log('Success', response);
    $scope.fridge = response.data;
    $scope.foods = response.data.Food;
    console.log($scope.foods);

  }, function(err){
    console.log('ERR', err);
  })
}])

.controller('AddFoodCtrl', ['$scope', 'AddFoodService', function($scope, AddFoodService) {
	$scope.data = {}

	$scope.addFood = function(){
		AddFoodService.addFood($scope.data.foodName, $scope.data.how_many, $scope.data.time_period)
			.success(function(data){
				state.go('tab.add-food');
			});
	}
}])


// local login copied from simple_login

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.email, $scope.data.password).success(function(data) {
            $state.go('tab.fridge');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

// .controller('ChatsCtrl', function($scope, Chats) {
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   }
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
