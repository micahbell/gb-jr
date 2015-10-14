app.controller('GlazeController', function($scope, $state, $stateParams, GlazesService) {

  $scope.recipes = GlazesService.showAll($stateParams.user_id).then(function(response) {
                    $scope.recipes = response.data;
                   });

  $scope.createRecipe = function() {
    GlazesService.create($scope.recipe, $scope.userId).then(function(response) {
      $state.go('layout.recipes');
    })
  };






});
