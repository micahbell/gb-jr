var app = angular.module('glazebook', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('register', {
      url: '',
      templateUrl: '/partials/register.html'
    })
    .state('layout', {
      url: '/glazes/layout',
      templateUrl: '/partials/layout.html'
    })
    .state('layout.new', {
      url: '/glazes/new',
      templateUrl: '/partials/new.html'
    })
    // .state('favorites', {
    //   url: '/glazes/favorites',
    //   templateUrl: '/views/favorites.html'
    // })
})
