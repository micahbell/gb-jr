app.controller('GlazeController', function($scope, $state, $stateParams, GlazesService) {

  GlazesService.showRecipe($stateParams.recipe_id, $stateParams.user_id).then(function(response) {
    console.log('Show', response);
    $scope.show = response;
  });

  $scope.recipes =  GlazesService.showAll($stateParams.user_id).then(function(response) {
                      $scope.recipes = response.data;
                    });

  $scope.createRecipe = function() {
    GlazesService.create($scope.recipe, $stateParams.user_id).then(function(response) {
      $state.go('layout.recipes');
    })
  };

  GlazesService.editRecipe($stateParams.recipe_id, $stateParams.user_id).then(function(response) {
    $scope.edit                = response;
    $scope.edit.title          = response.recipe.title;
    $scope.edit.favorite       = response.recipe.favorite;
    $scope.edit.tempRange      = response.recipe.tempRange;
    $scope.edit.cone           = response.recipe.cone;
    $scope.edit.firingType     = response.recipe.firingType;
    $scope.edit.surface        = response.recipe.surface;
    $scope.edit.opacity        = response.recipe.opacity;
    $scope.edit.color          = response.recipe.color;
    $scope.edit.notes          = response.recipe.notes;
    $scope.edit.specialty      = response.recipe.specialty;
    $scope.edit.testStatus     = response.recipe.testStatus;
    $scope.edit.ingredients    = response.recipe.ingredients;
    $scope.edit.addIngredients = response.recipe.addIngredients;
  });

  $scope.destroyRecipe = function(recipeId) {
    GlazesService.destroyRecipe(recipeId, $stateParams.user_id).then(function(response) {
    })
  }






});
