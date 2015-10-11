app.controller('AccountController', ['$scope', '$state', '$http', function($scope, $state, $http) {
  $scope.color='Blue';

  $scope.signUpForm = true;
  $scope.toggleSignUp = function() {
    $scope.signUpForm = !$scope.signUpForm;
  }

  $scope.signUp = function() {
    $http.post('auth/signup', $scope.user).then(function(response) {
      if(response.data.signUpErrors) {
        $scope.errors = response.data.signUpErrors;
      } else {
        $state.go('layout.recipes')
      };
    });
  };




}]);



  // A service holds a reference to any object.
  // A factory is a function which returns any object.
