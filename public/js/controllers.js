app.controller('HeroesController',function($scope,HeroeFactory){

    $scope.heroes = [];

    HeroeFactory.all().then(function (data) {
        $scope.heroes = data;
    });

});

app.controller('HeroeController',function($scope,HeroeFactory,$routeParams){


    HeroeFactory.byName($routeParams.heroe).then(function (data) {
        $scope.heroe  = data;

    });

    $scope.selectTab = function(tab){


    }
    $scope.mostrar = true;

});


app.controller('TabsController', function ($scope) {
      $scope.tab = 1;

      $scope.selectTab = function (tab) {
        $scope.tab = tab;
      };

      $scope.isActive = function (tab) {
        return tab === $scope.tab;
      };
})

