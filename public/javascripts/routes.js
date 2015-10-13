var app = angular.module('glazebook', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('register', {
      url: '',
      templateUrl: '/partials/register.html'
    })
    .state('layout', {
      url: '',
      templateUrl: '/partials/layout.html'
    })
    .state('layout.new', {
      url: '/new',
      templateUrl: '/partials/new.html'
    })
    .state('layout.recipes', {
      url: '/:user_id/recipes',
      templateUrl: '/partials/recipes.html'
    })
    // .state('layout.show', {
    //   url: '/:id',
    //   templateUrl: '/partials/show.html'
    // })
})
