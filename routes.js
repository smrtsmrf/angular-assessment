(function() {
	'use strict';

	angular
	  .module('assessment')
	  .config(NameConfiguration);

	NameConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function NameConfiguration($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/views/home.html'
		})

		.state('about', {
			url: '/about', 
			templateUrl: '/views/about.html'
		})

		.state('blog', {
			url: '/blog', 
			templateUrl: '/views/blog.html'
		})

		.state('shop', {
			url: '/shop', 
			templateUrl: '/views/shop.html', 
			resolve: {
				getProducts: function (mainService) {
					return mainService.getProducts()
				}
			},
			controller: 'mainCtrl'
		})

		.state('details', {
			url: '/details/:id',
			templateUrl: '/views/product-details.html',
			controller: function ($scope, $stateParams, mainService) {
				mainService.getDetails($stateParams.id).then(function (res) {
					$scope.product = res;
				})

			}
		})

		$urlRouterProvider.otherwise('/')
	}
})();