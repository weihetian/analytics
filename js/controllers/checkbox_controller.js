(function () {
 
    var app= angular.module('analytics');
    app.controller('checkboxController', ['$scope', function ($scope) {
		
		$scope.$watch("mile_report", function(){
			if($scope.mile_report){
				
			}
		});
		
		
		$scope.generate = function(){
			if($scope.mile_report){
				//alert("mile");
				var startdate = $("#start").val();
				var enddate = $("#end").val();
				var dataString='campaignid='+$scope.current_campaign_id+"&startdate="+startdate+"&enddate="+enddate;
				//alert(dataString);
				$.ajax({
					type: "POST",
					url: "data_access/pull_mile_data.php",
					datatype: "html",
					data: dataString,
					success: function(data) {
								//var campaigns = $.parseJSON(data);
						alert(data);
						//$scope.campaigns = campaigns;
						//$scope.$digest();
						//	alert(data);
						// var results = $.parseJSON(data);
						// $scope.posts = results;
						// $scope.$digest();
						// alert(data);
					}
				})
			}
			if($scope.impression_report){
				//alert("impression_report");
				var startdate = $("#start").val();
				var enddate = $("#end").val();
				var dataString='campaignid='+$scope.current_campaign_id+"&startdate="+startdate+"&enddate="+enddate;
				//alert(dataString);
				$.ajax({
					type: "POST",
					url: "data_access/pull_impression_data.php",
					datatype: "html",
					data: dataString,
					success: function(data) {
								//var campaigns = $.parseJSON(data);
						alert(data);
						//$scope.campaigns = campaigns;
						//$scope.$digest();
						//	alert(data);
						// var results = $.parseJSON(data);
						// $scope.posts = results;
						// $scope.$digest();
						// alert(data);
					}
				})
			}
			if($scope.map_report){
				alert("map_report");	
			}
			if($scope.story_report){
				alert("story_report");	
			}
		}
		
		
    }]);
 
}());