(function(){
'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
            'ngRoute',
            'myApp.view',
            'myApp.version'
    ])
    .config(config);

config.$inject = ['$locationProvider', '$routeProvider'];

function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view'});
}

})();
