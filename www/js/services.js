angular.module('firstApp.services', [])

.factory('Chats',  ['$rootScope', '$http', function ($rootScope,  $http) {

  // Some fake testing data
      return {

          all:function () { return $http.get('/IonicClub/firstApp/www/chats.json')
            .then(function successCallback(response) {
              return response;
            },
            function errorCallback(response) {
              alert(response);
            });

        },
        remove: function (chat) {
          chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
          for (var i = 0; i < chats.length; i++) {
            if (chats[i].id === parseInt(chatId)) {
              return chats[i];
            }
          }
        }
   };
}]);
