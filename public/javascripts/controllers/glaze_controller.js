app.controller('GlazeController', function($scope, $http, $state) {
  $scope.glazes;
  $scope.createRecipe = function() {
    $http.post('glaze/create', $scope.recipe).then(function(response) {
      $http.get('glaze/recipes').then(function(glazes) {
        $scope.glazes = glazes.data;
        console.log('scope.glazes', $scope.glazes);
        $state.go('layout.recipes');
      })
    });
  }

  // $scope.createRecipe = function() {
  //   $http.post('glaze/create', $scope.recipe).then(function(response) {
  //     $state.go('layout.recipes');
  //   })
  // };










});
