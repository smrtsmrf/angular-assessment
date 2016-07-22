(function() {
	'use strict';

	angular
	  .module('assessment')
	  .controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$scope', 'getProducts'];

	function mainCtrl($scope, getProducts) {
		$scope.products = getProducts;
		console.log($scope.products);
	}
})();