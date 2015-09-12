app.filter('normalize', function () {
      return function (input) {
          if (!input) return "";

          input = input
                  .replace('♀', 'f')
                  .replace('♂', 'm')
                  .replace(/\W+/g, "");
          return input.toLowerCase();
      };
});

app.filter('imageheroe', function () {

      return function (input,folder) {
        var url = "img/"+folder+"/"+ input;
        return url;
      };
});


app.filter('joinBy', function () {
        return function (input,delimiter) {
            return (input || []).join(delimiter || ',');
        };
    });