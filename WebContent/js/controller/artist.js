angular.module('artists').controller('artistController',
		[ '$scope', '$stateParams','spotyifyService', function($scope, $stateParams,spotyifyService) {
			
			spotyifyService.getArtist($stateParams.id).then(function(response){
				$scope.artist = response.data
			},function(error){
				alert("Error while getting artists")
			})
			
			spotyifyService.getTopTracks($stateParams.id).then(function(response){
				$scope.topTracks = response.data.tracks
			},function(error){
				alert("Error while getting top tracks")
			})
			
			spotyifyService.getAlbums($stateParams.id).then(function(response){
				$scope.albums = response.data.items
			},function(error){
				alert("Error while getting albums")
			})
			
			$scope.slide = {};
			var offset = 1200;
			
			$scope.slideNext = function(src){
				if($scope.slide[src]==undefined){
					$scope.slide[src] = {left:0, style:""}
				}
				
				$scope.slide[src].left = $scope.slide[src].left-offset;
				$scope.slide[src].style = "{left: '"+$scope.slide[src].left+"px';}";
			}
			
			$scope.slidePrevious = function(src){
				if($scope.slide[src]==undefined){
					$scope.slide[src] = {left:0, style:""}
				}
				
				$scope.slide[src].left = $scope.slide[src].left+offset;
				$scope.slide[src].style = "{left: '"+$scope.slide[src].left+"px';}";
			}
			
			$scope.isThereMoreSlide = function(src,lst){
				if($scope.slide[src]){
					var page = (Math.abs($scope.slide[src].left)/offset) + 1;
					return lst.length> (page*6);
				}else{
					return lst && lst.length>6
				}
			}
			
		} ])