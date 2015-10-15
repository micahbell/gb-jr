app.factory('AccountsService', function ($http) {
  return {
    signUp: function(user) {
      return $http.post('auth/signup', user).then(function(response) {
        return response;
      })
    },
    login: function(userLogin) {
      return $http.post('auth/login', userLogin).then(function(response) {
        return response;
      })
    },
  };
});
