app.controller('GlazeController', function($scope, $http, $state, RecipesService) {

  $scope.createRecipe = function() {
    RecipesService.create($scope.recipe).then(function(response) {
      console.log(response);
    })
  }








});

// finish writing create service function
// in your express route hit the database and return all user recipes
// send those recipes as json from that route
