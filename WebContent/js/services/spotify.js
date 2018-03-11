angular.module('artists').service('spotyifyService',
		[ '$http', 'spotifyApiUrl', function($http, spotifyApiUrl) {

			var searchArtist = function(query,page){
				return $http.get(spotifyApiUrl + "search?q="+query+"&type=artist"+"&offset="+page*20);
			}
			
			var getArtist = function(id){
				return $http.get(spotifyApiUrl + "artists/"+ id);
			}
			
			var getTopTracks = function(id){
				return $http.get(spotifyApiUrl + "artists/"+ id+"/top-tracks?country=us");
			}
			
			var getAlbums = function(id){
				return $http.get(spotifyApiUrl + "artists/"+ id+"/albums?limit=50");
			}
		
			return{
				search : searchArtist,
				getArtist: getArtist,
				getTopTracks: getTopTracks,
				getAlbums: getAlbums
			}
			
		} ])