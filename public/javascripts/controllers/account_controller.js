app.controller('AccountController', function($scope, $location, AccountsService) {
  $scope.color='Blue';

  $scope.signUpForm = true;
  $scope.toggleSignUp = function() {
    $scope.signUpForm = !$scope.signUpForm;
  }

  $scope.signUp = function() {
    AccountsService.signUp($scope.user).then(function(response) {
      if(response.data.signUpErrors) {
        $scope.errors = response.data.signUpErrors;
      } else {
        $location.path('/' + response.data._id + '/new');
      }
    })
  };

  $scope.userLogin = function() {
    AccountsService.login($scope.login).then(function(response) {
      console.log('RESPONSE!!!!!', response);
      console.log('response.data.id', response.data.id);
      if(response.data.loginError) {
        $scope.loginErrors = response.data.loginError;
      } else if(response.data.glazes === 0){
        $location.path('/' + response.data.id + '/new');
        // $state.go('layout.new')
      } else {
        $location.path('/' + response.data.id + '/recipes');
        // $state.go('layout.recipes')
      }
    })
  };





});




  // A service holds a reference to any object.
  // A factory is a function which returns any object.
