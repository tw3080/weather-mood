var viewsModule = require('../../views');

viewsModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/saved-cities', {
        template: `<ng-include src="'./components/nav/nav.html'"></ng-include>
        <div class="saved-cities-container">
            <h1>Saved Cities</h1>
            <p class="unimportant-text">
                Save cities for quick viewing
            </p>
        <saved-cities submit="submit"></saved-cities>
        </div>`,
        controller: 'SavedCitiesCtrl',
        controllerAs: 'savedCities'
    });
}]);

viewsModule.controller('SavedCitiesCtrl', function($scope, $rootScope, weatherAppService, getWeatherConditions) {
    // Set scope variables for binding to template
    // Audio/css
    $scope.audioFile = weatherAppService.weatherSounds;
    $rootScope.weatherClass = weatherAppService.weatherClass;

    $scope.weatherCallback = function(location) {
        window.location.href = '#/'; // Redirect the user to the home route
        $scope.showWeather = weatherAppService.showWeather; // Show the weather conditions
        // Location
        $scope.address = location; // Set the current location to the searched address
        $scope.location = weatherAppService.location;
        // Weather forecasts
        $scope.currentWeather = weatherAppService.currentWeather;
        $scope.tenDay = weatherAppService.tenDay.data;
        // Audio/css
        $scope.audioFile = weatherAppService.weatherSounds;
        $rootScope.weatherClass = weatherAppService.weatherClass;
    };

    // Uses the submit function from weatherAppService to geocode the address input by the user and gets the current weather/10-day forecast
    $scope.submit = function(address) {
        weatherAppService.submit(address, $scope.weatherCallback);
        $scope.showWeather = true;
    };
});
