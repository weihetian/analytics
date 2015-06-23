(function () {
 
    var app= angular.module('analytics');
    app.controller('storyController', ['$scope', function ($scope) {
		
		$scope.showdelete_story;
		
		$scope.$watch("stories_data", function(){
			$scope.stories = $scope.stories_data;
			$scope.$digest();
		})
		
		
		$scope.hover_story=function(id){
			$scope.showdelete_story = id;
			$scope.$digest();
		}
		
		
		var removeByAttr = function(arr, attr, value){
		    var i = arr.length;
		    while(i--){
		       if( arr[i] 
		           && arr[i].hasOwnProperty(attr) 
		           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

		           arr.splice(i,1);

		       }
		    }
		    return arr;
		}
		
		
		$scope.delete_story = function(id){
			var dataString = "storyid="+id;

			$.ajax({

			type: "POST",
			url: "data_access/delete_story.php",
			datatype: "html",
			data: dataString,
			success: function(data) {
				removeByAttr($scope.stories, 'id', id);
				$scope.$digest();
			}})
		}
		
		$scope.upload_story = function(){
			
			var dataString='campaignid='+$scope.current_campaign_id+"&content="+$scope.story;
		
			$.ajax({
				type: "POST",
				url: "data_access/push_stories.php",
				datatype: "html",
				data: dataString,
				success: function(data) {
				
					$scope.story = "";
							
					alert(data);
					$scope.$digest();
				}
			})
		}
		
		
    }]);
 
}());