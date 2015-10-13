app.factory('GlazesService', function ($http) {
  return {
    create: function(recipe) {
      return $http.post('/glazes/create', recipe).then(function(response) {
        console.log('Glaze Added');
        return response;
      })
    },
    showAll: function(userId) {
      return $http.get('/glazes/' + userId + '/recipes').then(function(response) {
        // console.log('FIND ALL SERVICE', response);
        return response;
      })
    }
  }
})
