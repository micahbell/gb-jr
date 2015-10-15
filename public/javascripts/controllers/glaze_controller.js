app.controller('GlazeController', function($scope, $state, $stateParams, GlazesService) {

  GlazesService.showRecipe($stateParams.recipe_id, $stateParams.user_id).then(function(response) {
    $scope.recipe = response;
  })

  $scope.recipes = GlazesService.showAll($stateParams.user_id).then(function(response) {
                    $scope.recipes = response.data;
                   });

  $scope.createRecipe = function() {
    GlazesService.create($scope.recipe, $stateParams.user_id).then(function(response) {
      $state.go('layout.recipes');
    })
  };

  $scope.editRecipe = function(recipeId) {
    alert('click');
    GlazesService.editRecipe(recipeId, $stateParams.user_id).then(function(response) {
      $scope.editRecipe = response.data.recipe;
      alert('working!')
      $state.go('layout.edit');
    })
  };

  $scope.destroyRecipe = function(recipeId) {
    GlazesService.destroyRecipe(recipeId, $stateParams.user_id).then(function(response) {
      alert('working!')
    })
  }

  $scope.foo = 'bar';






});
