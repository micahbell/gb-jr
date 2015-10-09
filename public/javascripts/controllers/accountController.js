app.controller('AccountController', function($scope, $state, $http) {
  $scope.color='Blue';
  $scope.glazes = function() {
    $state.go('layout');
  }

  $scope.showForm = false;
  $scope.toggleSignUp = function() {
    $scope.showForm = !$scope.showForm;
  }
});
