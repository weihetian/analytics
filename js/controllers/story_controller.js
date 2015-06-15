(function () {
 
    var app= angular.module('analytics');
    app.controller('storyController', ['$scope', function ($scope) {
		
		$scope.upload_story = function(){
			
			var dataString='campaignid='+$scope.current_campaign_id+"&content="+$scope.story;
		alert(dataString);
			// $.ajax({
	// 			type: "POST",
	// 			url: "data_access/pull_mile_data.php",
	// 			datatype: "html",
	// 			data: dataString,
	// 			success: function(data) {
	// 						//var campaigns = $.parseJSON(data);
	// 				alert(data);
	// 				//$scope.campaigns = campaigns;
	// 				//$scope.$digest();
	// 				//	alert(data);
	// 				// var results = $.parseJSON(data);
	// 				// $scope.posts = results;
	// 				// $scope.$digest();
	// 				// alert(data);
	// 			}
	// 		})
		}
		
		
    }]);
 
}());