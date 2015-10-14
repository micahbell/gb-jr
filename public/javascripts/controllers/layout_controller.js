app.controller('LayoutController', function($scope, $state, $http) {
  $scope.color='Red';
  $scope.user = 'Frank';

  $scope.logout = function() {
    $http.get('auth/logout').then(function(response) {
      $state.go('register');
    })
  }
});
