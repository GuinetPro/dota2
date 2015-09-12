app.directive('heroeName', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/heroe-name.html'
      };
});


app.directive('heroeImage', function () {
    return {

        restrict: 'E',
        templateUrl: 'partials/heroe-image.html',

      };
});



app.directive('heroeData', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/heroe-data.html'
      };
});



app.directive('heroeAbility', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/heroe-ability.html'
      };
});


app.directive('heroeStatistics', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/heroe-statistics.html'
      };
});



