app.controller('GlazeController', function($scope, $state, $stateParams, GlazesService) {
  $scope.userId = $stateParams.user_id;
  //
  // $scope.recipes =
  //   GlazesService.showAll($scope.userId).then(function(response) {
  //     console.log('GLAZE CONTROLLER Response', response);
  //     $scope.recipes = response.data;
  //   })

  $scope.createRecipe = function() {
    GlazesService.create($scope.recipe).then(function(response) {
      $state.go('layout.recipes')
    })
  }

  $scope.getGlazes = function() {
    GlazesService.showAll($scope.userId).then(function(response) {
      console.log('GLAZE CONTROLLER Response', response);
      $scope.recipes = response.data;
    })
  }




});
