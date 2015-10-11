app.controller('AccountController', function($scope, $state, $http) {
  $scope.color='Blue';
  $scope.glazes = function() {
    $state.go('layout');
  }

  $scope.signUpForm = false;
  $scope.toggleSignUp = function() {
    $scope.signUpForm = !$scope.signUpForm;
  }

  $scope.signUp = function() {
    $http.post('auth/signup', $scope.user).then(function(response) {
      console.log(response);
      if(response.data.signUpErrors) {
        $scope.errors = response.data.signUpErrors;
      } else {
        $state.go('layout.new')
      };
    });
  };




});






  // A service holds a reference to any object.
  // A factory is a function which returns any object
  // A provider is a function which returns any function
  //
