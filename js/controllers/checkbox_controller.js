(function () {
 
    var app= angular.module('analytics');
    app.controller('checkboxController', ['$scope', function ($scope) {
		
		$scope.$watch("mile_report_trends", function(){
			if($scope.mile_report_trends){
				
			}
		});
		
		$scope.mile_trend_report = false;
		$scope.mile_cities_report=false;
		$scope.impression_trend_report = false;
		$scope.impression_cities_report=false;
		$scope.cover = false;
			
		// $scope.create_chart = function(id){
	// 		if(id==1)
	// 		{
	//
	// 		}
	// 	}
	//	
		
		$scope.generate = function(){
			if($scope.cover_report){
				
					$scope.cover = true;
					
			}
			if($scope.mile_report_trends){
				//alert("mile");
				var startdate = $("#start").val();
				var enddate = $("#end").val();
				var dataString='campaignid='+$scope.current_campaign_id+"&startdate="+startdate+"&enddate="+enddate+"&type=trends";
				//alert(dataString);
				$.ajax({
					type: "POST",
					url: "data_access/pull_mile_data.php",
					datatype: "html",
					data: dataString,
					success: function(data) {

						$scope.mile_trend_report = true;
						$scope.mile_trendsjson = $.parseJSON(data);
					//	alert(data);
						//$scope.campaigns = campaigns;
						//$scope.$digest();
						//	alert(data);
						// var results = $.parseJSON(data);
						// $scope.posts = results;
						 $scope.$digest();
						 
						// alert(data);
					}
				})
			}
			
			if($scope.mile_report_cities){
				var startdate = $("#start").val();
				var enddate = $("#end").val();
				var dataString='campaignid='+$scope.current_campaign_id+"&startdate="+startdate+"&enddate="+enddate+"&type=cities";
			//	alert(dataString);
				$.ajax({
					type: "POST",
					url: "data_access/pull_mile_data.php",
					datatype: "html",
					data: dataString,
					success: function(data) {
						$scope.mile_cities_report = true;
						$scope.mile_citiesjson = $.parseJSON(data);
								//var campaigns = $.parseJSON(data);
					//	alert(data);
						//$scope.campaigns = campaigns;
						//$scope.$digest();
						//	alert(data);
						// var results = $.parseJSON(data);
						// $scope.posts = results;
						 $scope.$digest();
						// alert(data);
					}
				})
			}
			
			
			if($scope.impression_report_trends){
				//alert("impression_report");
				var startdate = $("#start").val();
				var enddate = $("#end").val();
				var dataString='campaignid='+$scope.current_campaign_id+"&startdate="+startdate+"&enddate="+enddate+"&type=trends";
				//alert(dataString);
				$.ajax({
					type: "POST",
					url: "data_access/pull_impression_data.php",
					datatype: "html",
					data: dataString,
					success: function(data) {
						

						$scope.impressions_trend_report = true;
						$scope.impressions_trendsjson = $.parseJSON(data);
								//var campaigns = $.parseJSON(data);
					//	alert(data);
						//$scope.campaigns = campaigns;
						//$scope.$digest();
						//	alert(data);
						// var results = $.parseJSON(data);
						// $scope.posts = results;
						 $scope.$digest();
					//	console.log(data);
								//var campaigns = $.parseJSON(data);
					//	alert(data);
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
			
			if($scope.impression_report_cities){
				//alert("impression_report");
				var startdate = $("#start").val();
				var enddate = $("#end").val();
				var dataString='campaignid='+$scope.current_campaign_id+"&startdate="+startdate+"&enddate="+enddate+"&type=cities";
				//alert(dataString);
				$.ajax({
					type: "POST",
					url: "data_access/pull_impression_data.php",
					datatype: "html",
					data: dataString,
					success: function(data) {
						

						$scope.impressions_cities_report = true;
						$scope.impressions_citiesjson = $.parseJSON(data);
					//	console.log(data);
								//var campaigns = $.parseJSON(data);
					//	alert(data);
						//$scope.campaigns = campaigns;
						$scope.$digest();
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
			

		 $("html, body").delay(500).animate({ scrollTop: $('.report_area').offset().top }, 1000);
		}
		
		
    }]);
 
}());