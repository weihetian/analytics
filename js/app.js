(function(){
	var app = angular.module('analytics',[]);


	app.controller('selectorController',function($scope){
		
		 $("html, body").animate({ scrollTop: 0 }, 800);
		
		$scope.campaigns= Array();
		$scope.current_campaign_name;
		$scope.current_campaign_id;
		
		var startsearching = true;
		$scope.$watch("inputstring", function(newValue, oldValue) {
			if (newValue.length > 0 && startsearching) {
				console.log(newValue.length);
					$scope.searchcampaigns = [];
					var searchvalue = newValue;
					// console.log(searchvalue);
					for(var i =0;i<$scope.campaigns.length;i++){
						if($scope.campaigns[i].name!=null){
							//   console.log($scope.friends[i].username);
							if($scope.campaigns[i].name.toLowerCase().indexOf(searchvalue.toLowerCase())!= -1)
							{
								console.log("this is the shit: "+$scope.campaigns[i].name);
								$scope.searchcampaigns.push($scope.campaigns[i]);

							}
						}
						}

						$scope.$digest();

				}else
				{
					startsearching = true;
				}
			});
			
			$scope.resume = function(){

				$(".usersearch_list").show();
			}
			
			$scope.clean = function(){
				$(".usersearch_list").hide();
				
			}
			
			$scope.select_campaign_name = function(campaign_name){
				
				$scope.inputstring = campaign_name;
				
				startsearching= false;

				$scope.searchcampaigns = [];

				$scope.$digest();
			}
			
			$scope.submit_campaign = function(){
				var campaign_name=$scope.inputstring;
				$scope.current_campaign_name=campaign_name;

				$scope.cancel_select_campaign();
				$scope.$digest();
				
				
			}
			
				$scope.$watch("current_campaign_name", function() {
					if($scope.current_campaign_name==null){
						
					}else{
						for(var i =0;i<$scope.campaigns.length;i++){
							if($scope.campaigns[i].name!=null){
								//   console.log($scope.friends[i].username);
								if($scope.campaigns[i].name== $scope.current_campaign_name)
								{
									$scope.current_campaign_id=$scope.campaigns[i].id;

								}
							}
							}
					}
				}
			)
			
			
			$scope.cancel_select_campaign = function(){
				 $("html, body").animate({ scrollTop: 0 }, 800);
				$('.middle_layer').hide();
				$('.selector').hide();
			}
		
		
		$scope.select_campaign = function(){
			
			$('.middle_layer').show();
			$('.selector').show();
			var dataString;
			
			$.ajax({
				type: "POST",
				url: "data_access/pull_campaigns.php",
				datatype: "html",
				data: dataString,
				success: function(data) {
					
							var campaigns = $.parseJSON(data);
					$scope.campaigns = campaigns;
					$scope.$digest();
					//	alert(data);
					// var results = $.parseJSON(data);
					// $scope.posts = results;
					// $scope.$digest();
					// alert(data);
				}
			})
		}
		
		$scope.select_campaign();
		
	});
	
})();
	
