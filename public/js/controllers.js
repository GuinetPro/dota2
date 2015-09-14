app.controller('HeroesController',function($scope,HeroeFactory){

    $scope.heroes = [];
    $scope.roles  = [];
    $scope.range  = [];

    HeroeFactory.all().then(function (data) {
        $scope.heroes = data;
    });

    HeroeFactory.getRol().then(function (data) {
        $scope.roles  = data;

    });

    HeroeFactory.getRange().then(function (data) {
        $scope.range  = data;

    });


    $scope.filterRange = function(){

       if( $scope.rango ===  null ){

          HeroeFactory.all().then(function (data) {
              $scope.heroes = data;
          });

       }else{

          HeroeFactory.filterByRange($scope.rango ) .then(function (data) {
              $scope.heroes = data;

          });
       }

    }

    $scope.filterHeroes = function(){

       if( $scope.rol ===  null ){

          HeroeFactory.all().then(function (data) {
              $scope.heroes = data;
          });

       }else{

          HeroeFactory.filterByRole($scope.rol ) .then(function (data) {
              $scope.heroes = data;

          });
       }

    }

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

