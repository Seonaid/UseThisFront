angular.module('starter.services', [])

// .service('LoginService', ['$http', function($q, $http) {
//     return {
//         loginUser: function(email, pw) {
//             var deferred = $q.defer();
//             var promise = deferred.promise;

//             // $http({method: 'POST', url: "http://localhost:3000/api/login", 
//             //   {email: email, password: pw}}).then(

//             //   function(user){
//             //     if(user) { 
//             //       deferred.resolve(response); 
//             //     } else {
//             //       deferred.reject('Wrong credentials.');
//             //     }
//             //   } 
//             //   );

 
//             if (email == 'seonaidl@gmail.com' && pw == 'secret') {
//                 deferred.resolve('Welcome ' + name + '!');
//             } else {
//                 deferred.reject('Wrong credentials.');
//             }
//             promise.success = function(fn) {
//                 promise.then(fn);
//                 return promise;
//             }
//             promise.error = function(fn) {
//                 promise.then(null, fn);
//                 return promise;
//             }
//             // return promise;


//         }
//     }
// }])

.service('AddFoodService', ['$http', '$q', function($http, $q){
  return {
    addFood: function(food_name, how_many, time_period) {
      // make call to API in UseThisBack
      console.log('adding food ' + food_name);
      console.log('good for ' + how_many);
      console.log(time_period);
      var data = {};
      var user = {};
      var newFood = {};
      user.id = 1

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
        console.log('it\'s a miracle!');
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

.service('LoginService', function($q) {
    return {
        loginUser: function(email, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            var data = {
              email: email,
              password: pw
            }
            console.log('about to log in ' + email);


            // $http({method: 'POST', url: "http://localhost:3000/api/login", 
            //   {email: email, password: pw}}).
            // success(function(data, status, headers, config){
            //   console.log(data);
            //   return data;
            // }).
            // error(function(data, status, headers, config){
            //   return status;
            // });
         // $http({method: 'POST', url: 'http://localhost:3000/api/login', data: data});

            if (email == 'seonaidl@gmail.com' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
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
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
