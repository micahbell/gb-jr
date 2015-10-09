var app = angular.module('glazebook', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('register', {
      url: '',
      templateUrl: '/partials/register.html'
    })
    .state('layout', {
      url: '/glazes',
      templateUrl: '/partials/layout.html'
    })
    .state('layout.new', {
      url: '/new',
      templateUrl: '/partials/new.html'
    })
})
