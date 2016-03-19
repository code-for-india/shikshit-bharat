var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.constant('appConfig', {

});

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);

myApp.run(['$rootScope', 'callApi', function($rootScope, callApi) {
    callApi.callApi('stub/data.json', 'GET').then(function(data) {
        $rootScope.data = data.data;
    });
}]);