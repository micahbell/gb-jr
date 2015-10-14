var app = angular.module('glazebook', ['ui.router', 'angularMoment']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('register', {
      url: '',
      templateUrl: '/partials/register.html'
    })
    .state('layout', {
      url: '/:user_id',
      templateUrl: '/partials/layout.html'
    })
    .state('layout.new', {
      url: '/new',
      templateUrl: '/partials/new.html'
    })
    .state('layout.recipes', {
      url: '/recipes',
      templateUrl: '/partials/recipes.html'
    })
    // .state('layout.show', {
    //   url: '/:id',
    //   templateUrl: '/partials/show.html'
    // })
    // $locationProvider.html5Mode(true);
})
