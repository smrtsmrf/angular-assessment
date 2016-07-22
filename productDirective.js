(function() {
	'use strict';

	angular
	  .module('assessment')
	  .directive('productDirective', productDirective);

	function productDirective() {
		return{
			restrict: 'E',
			scope: {
				product : '='
			},
			templateUrl: '/views/product-tmpl.html',
			controller: function ($scope) {
				$scope.toggle = function () {
					$scope.hidden = !$scope.hidden;
				}
			},
			
			link: function(scope, elem, attrs) {

			},
			
		};
	}
})();

