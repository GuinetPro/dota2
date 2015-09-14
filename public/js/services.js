app.factory('HeroeFactory',function($http, $q ,  $filter){

    var normalize = $filter('normalize');

    function all() {
        var deferred = $q.defer();

        $http.get('/heroes.json')
          .success(function (data) {
            deferred.resolve(data);
          });

        return deferred.promise;
    }


    function byName(name) {
        name = normalize(name);
        var deferred = $q.defer();

        all().then(function (data) {
          var results = data.filter(function (heroe) {
            return normalize(heroe.name) === name;
          });

          if (results.length > 0) {
            deferred.resolve(results[0]);
          } else {
            deferred.reject();
          }

        });

        return deferred.promise;
      }

    function filterByRole(filter){

        var filtro = [];

        var deferred = $q.defer();

        all().then(function (data) {

            data.filter(function (heroe) {

                var d = heroe.role;

                d.filter(function (p) {

                     if( p == filter){

                        filtro.push(heroe);
                        deferred.resolve(filtro);
                     }

                  });

              });

        });

        return deferred.promise;

    }



    function filterByRange(range){

        var filtro = [];

        var deferred = $q.defer();

        all().then(function (data) {

            data.filter(function (heroe) {

                var d = heroe.attack_range;

                if( d == range){

                    filtro.push(heroe);
                    deferred.resolve(filtro);
                }


              });

        });

        return deferred.promise;

    }

    function getRange(){

        var results = []
        var deferred = $q.defer();

        all().then(function (data) {

              data.map(function (heroe) {

                var d = heroe.attack_range;


                if( results.indexOf(d) == - 1 ){
                    results.push(d);
                }

              });


              if (results.length > 0) {
                deferred.resolve(results);
              } else {
                deferred.reject();
              }


          });

          return deferred.promise;

    }



    function getRol(){

        var results = []
        var deferred = $q.defer();

        all().then(function (data) {

          data.map(function (heroe) {

            var d = heroe.role;

            d.map(function (p) {

                  if( results.indexOf(p) == - 1 ){

                    results.push(p)
                  }

              });

          });

          if (results.length > 0) {
            deferred.resolve(results);
          } else {
            deferred.reject();
          }


        });

        return deferred.promise;
      }


    return { all:all,
             byName:byName,
             getRol:getRol,
             filterByRole:filterByRole,
             getRange:getRange,
             filterByRange:filterByRange };
})