app.factory('GlazesService', function ($http) {
  return {
    create: function(recipe, userId) {
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
    showRecipe: function(recipeId, userId) {
      return $http.get('/glazes/' + userId + '/recipes/' + recipeId).then(function(response) {
        return response.data;
      })
    },
    editRecipe: function(recipeId, userId) {
      return $http.get('/glazes/' + userId + '/recipes/' + recipeId + '/edit').then(function(response) {
        console.log('FOUND EDIT RECIPE', response.data);
        return response.data;
      })
    },
    // updateRecipe: function(recipeId, userId) {
    //   return $http.post('/glazes/' + userId + '/recipes/' + recipeId + '/update').then(function(response) {
    //     return response;
    //   })
    // },
    // destroyRecipe: function(recipeId, userId) {
    //   return $http.post('/glazes/' + userId + '/recipes/' + recipeId + '/delete').then(function(response) {
    //     alert('Recipe destroyed');
    //     return response;
    //   })
    // }
  }
})






//
