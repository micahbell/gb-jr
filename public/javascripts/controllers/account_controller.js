app.controller('AccountController', function($scope, $http, $state, AccountsService) {
  $scope.color='Blue';

  $scope.signUpForm = true;
  $scope.toggleSignUp = function() {
    $scope.signUpForm = !$scope.signUpForm;
  }

  $scope.signUp = function() {
    AccountsService.signUp($scope.user).then(function(response) {
      console.log(response);
      if(response.data.signUpErrors) {
        $scope.errors = response.data.signUpErrors;
      } else {
        $state.go('layout.recipes')
      }
    })
  };




});




  // A service holds a reference to any object.
  // A factory is a function which returns any object.
