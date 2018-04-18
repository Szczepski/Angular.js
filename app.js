// MODULES

var angularApp = angular.module('turbineApp', ['ngRoute', 'ngResource']);

// ROUTES
angularApp.config(function ($routeProvider){

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })
        .when('/api/', {
            templateUrl: 'pages/api.htm',
            controller: 'apiController'
        })
        .when('/api/:num', {
            templateUrl: 'pages/api.htm',
            controller: 'apiController',
        })
});

// SERVICE

angularApp.service('apiService', ['$http', '$log', function($http, $log) {

      var self = this;

          $http.get('https://jsonplaceholder.typicode.com/photos')
            .then(function successCallback(response) {
              $log.info("data load succes!");

              self.json = response.data;
              $log.warn(self.json);
              // return self.json;

          }, function errorCallback(response) {
              $log.error("Server response not found");

          });

}]);

// CONTROLLERS
angularApp.controller('homeController', ['$scope', '$log', 'apiService', '$http', '$routeParams', function($scope, $log, apiService, $http, $routeParams) {

          // $scope.num = $routeParams.num;
          $log.info('homeController');


}]);

angularApp.controller('apiController', ['$scope', '$log', 'apiService', '$http', '$routeParams' ,function($scope, $log, apiService, $http, $routeParams) {
          $log.info('ApiController');

          // $scope.num = $routeParams.num || 1;

          $scope.apiResult = apiService.json;
          $log.info($scope.apiResult);


}]);

// DIRECTIVES
angularApp.directive('contentResult', function() {
    return {
        restrict: 'AE',
        templateUrl: 'directives/contentResult.htm',
        replace: true,
        scope: {
          itemAlbumId: '@',
          itemId: '@',
          itemTitle: '@',
          itemImgSx: '@',
          itemImgXl: '@'
        }
    }

})
