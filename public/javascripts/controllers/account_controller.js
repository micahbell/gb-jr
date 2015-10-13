app.controller('AccountController', function($scope, $state, $location, AccountsService) {
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
        $scope.userId = response.data._id;
        $location.path('/' + $scope.userId + '/recipes');
        $state.go('layout.recipes');
      }
    })
  };





});




  // A service holds a reference to any object.
  // A factory is a function which returns any object.
