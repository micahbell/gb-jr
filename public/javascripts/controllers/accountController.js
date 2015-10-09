app.controller('AccountController', function($scope, $state) {
  $scope.color='Blue';

  $scope.glazes = function() {
    $state.go('layout');
  }
});
