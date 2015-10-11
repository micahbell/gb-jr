app.controller('LayoutController', function($scope, $state) {
  $scope.color='Red';

  $scope.new = function() {
    $state.go('layout.new');
  }
})
