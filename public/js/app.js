var app = angular.module("Dota2App",['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/heroes.html',
        controller: 'HeroesController'
      })

      .when('/:heroe', {
        templateUrl: 'views/heroe.html',
        controller: 'HeroeController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);