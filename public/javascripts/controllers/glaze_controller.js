app.controller('GlazeController', function($scope, $http) {
  $scope.createRecipe = function() {
    $http.post('glazes/create', $scope.recipe).then(function(response) {
      //if no recipes render new partial
      //otherwise render glazes partial
      console.log('++++++++++RESPONSE', response);
    });
  }
})
