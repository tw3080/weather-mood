var weatherApp = angular.module('weatherApp', ['weatherAppViews', 'ngRoute', 'LocalStorageModule'])
    .config(function($routeProvider) {
        /* If the user tries to go to any route other than one which is already defined, redirect them to the home page */
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
