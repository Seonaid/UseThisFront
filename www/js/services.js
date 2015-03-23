angular.module('starter.services', ['ngStorage'])

.service('AddFoodService', ['$http', '$q', '$localStorage', function($http, $q, $localStorage){
  return {
    addFood: function(food_name, how_many, time_period) {
      // make call to API in UseThisBack
      console.log('adding food ' + food_name);
      console.log('good for ' + how_many);
      console.log(time_period);
      var data = {};
      var user = $localStorage.user;
      var newFood = {};
      

      data.user = user;
      newFood.foodName = food_name;
      newFood.how_many = how_many;
      newFood.time_period = time_period;
      data.newFood = newFood;

      console.log('sending' + data);
      $http({method: 'POST', url: 'http://localhost:3000/api/add_food', data: data}).
        success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
        console.log('This came back from the database: ' + JSON.stringify(data));

        $localStorage.foods.push(data);

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log(data);
          console.log('just like I planned it');
        });
      return true;
    }
  }
}])

.service('LoginService', ['$http', '$q', '$localStorage', function($http, $q, $localStorage) {

    return {
        loginUser: function(email, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

          console.log('in loginUser with ' + email);
          var user = {};
          user.email = email;
          user.password = pw;

            $http({method: 'POST', url: 'http://localhost:3000/api/login', data: user}).
            success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
            console.log('it\'s a miracle!');
                deferred.resolve(data);
                promise.data = data;
                console.log(data);
                $localStorage.user = data.user;
                $localStorage.foods = data.foods;
            }).
            error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              console.log(data);
              console.log('or the same old thing');
            }); 
 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
}])
