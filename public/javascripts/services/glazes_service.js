app.factory('GlazesService', function ($http) {
  return {
    create: function(recipe, userId) {
      return $http.post('/glazes/' + userId + '/create', recipe).then(function(response) {
        console.log('Glaze Added');
        return response;
      })
    },
    showAll: function(userId) {
      console.log('fjkdaljflda;fjkdla;', userId);
      return $http.get('/glazes/' + userId + '/recipes').then(function(response) {
        return response;
      })
    }
  }
})
