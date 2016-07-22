(function() {
	'use strict';

	angular
	  .module('assessment')
	  .service('mainService', mainService);

	mainService.$inject = ['$http'];

	function mainService($http) {
		this.getProducts = function () {
			return $http.get('http://practiceapi.devmounta.in/products')
			.then(function (res) {
				// console.log(res);
				return res.data;
			})
		}

		this.getDetails = function (id) {
			return $http.get('http://practiceapi.devmounta.in/products/' + id)
			.then(function (res) {
				return res.data;
			})
		}
	}
})();