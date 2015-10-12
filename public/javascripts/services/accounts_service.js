app.factory('AccountsService', function ($http) {
  return {
    signUp: function(user) {
      return $http.post('auth/signup', user).then(function(response) {
        console.log('User Added');
        return response;
      })
    },
  }
});
