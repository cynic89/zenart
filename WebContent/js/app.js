'use strict';
angular.module('artists', []);

var zenart = angular.module('zenart', ['artists', 'ui.router' ]).config(
		[ '$stateProvider', '$urlRouterProvider', '$httpProvider',
				function($stateProvider, $urlRouterProvider, $httpProvider) {

					$stateProvider.state("home", {
						url : "/home",
						controller : 'homeController',
						templateUrl : 'partials/home.html'
					}).state("artists", {
						url : "/artists",
						templateUrl : 'partials/artists.html'
					}).state("artists.search", {
						url : "/search/:q",
						controller : 'searchController',
						templateUrl : 'partials/search.html'
					}).state("artists.artist", {
						url : "/det/:id",
						controller : 'artistController',
						templateUrl : 'partials/artist.html'
					})
					$urlRouterProvider.otherwise('/home');
				} ]);

zenart.value('spotifyApiUrl','https://api.spotify.com/v1/');
zenart.filter('numSuffix', function(){
	return function(val){
		if(val && val>1000){
			var rounded = Math.round(val/1000);
			return rounded+"k"
		}
		return val;
	}
})