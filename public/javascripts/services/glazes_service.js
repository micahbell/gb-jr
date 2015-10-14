app.factory('GlazesService', function ($http) {
  return {
    create: function(recipe, userId) {
      console.log('USER ID', userId);
      return $http.post('/glazes/' + userId + '/create', recipe).then(function(response) {
        console.log('Glaze Added');
        return response;
      })
    },
    showAll: function(userId) {
      return $http.get('/glazes/' + userId + '/recipes').then(function(response) {
        return response;
      })
    },
    showRecipe: function(recipeId) {
      // return $http.get('/glazes/' + userId + '/recipes/' + recipeId).then(function(response) {
      //
      // })
    }
  }
})
