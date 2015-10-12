app.factory('RecipesService', function ($http) {
  return {
    create: function(recipe) {
      return $http.post('glazes/create', recipe).then(function(response) {
        console.log('Glaze Added');
        return response;
      })
    },
    all: function() {
      return $http.get('glazes/recipes').then(function(response) {
        console.log("CONTROLLER RESPONSE");
        console.log(response);
        return response;
      })
    },
    find: function(recipe) {

    }
  }
})
