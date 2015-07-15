(function () {
 
    var app= angular.module('analytics');
    app.controller('chartsController', ['$scope', function ($scope) {
		
		var mile_trends_linechart;
		var mile_trends_linechart_created=true;
		
		
		$scope.$watch("mile_trendsjson", function(){
			
			// alert($scope.mile_trendsjson);
			// var a = document.getElementById("hide_area");
	// 		a.style.display = "block";
			if($scope.mile_trendsjson!=undefined){

				mile_trends_linechart_created=false;
			
			var keys = [];
		     var values = [];
			var sum = 0;
			var num = 0;
			 $.each($scope.mile_trendsjson, function(k,v) {
		            keys.push(k);
		            values.push(Math.round(v/1.60934));
		            sum = sum + Math.round(v/1.60934);
		            num++;
		        });
				
		        var lineChartData = {
				labels :keys,
				datasets : [
			
					{
						fillColor : "rgba(151,187,205,0.75)",
						strokeColor : "#004059",
						highlightFill : "rgba(151,187,205,0.75)",
						highlightStroke : "rgba(151,187,205,1)",
						data :  values
					}
				]

			}
			
			if(mile_trends_linechart_created){
				//alert("destroy");
				mile_trends_linechart.destroy();
			}
			
			var ctx = document.getElementById("mile_trendChart").getContext("2d");
		
		
			///var width = $(".chart_area").width();
			 document.getElementById('mile_trendChart').width = 2000-100;
			 document.getElementById('mile_trendChart').height = 700;
			options = {

				   animation: false,
	               pointDot : false,
	               pointHitDetectionRadius : 2,
	               scaleShowGridLines : true,
				scaleFontSize: 25,
	               bezierCurve : true,
				pointDot : true
   
	            };
				$scope.total=sum;
				$scope.average=Math.ceil(sum/num);
			
			 mile_trends_linechart = new Chart(ctx).Line(lineChartData, options);
			 mile_trends_linechart_created = true;
			 	 $scope.$parent.miles_done=(mile_cities_barchart_created&&mile_trends_linechart_created);
			  $scope.$digest();
				// alert();
				//  alert(keys);
				//  				alert(values);
// 				alert(num);
		}
		// a.style.display = "none";
		});
		
		
		
		
		var mile_cities_barchart;
		var mile_cities_barchart_created=true;
		
		$scope.$watch("mile_citiesjson", function(){

			
			// var a = document.getElementById("hide_area");
	// 		a.style.display = "block";
			if($scope.mile_citiesjson!=undefined){
			mile_cities_barchart_created=false;
			var keys = [];
		     var values = [];
			var sum = 0;
			var num = 0;
			 $.each($scope.mile_citiesjson, function(k,v) {
		            keys.push(k);
		            values.push(Math.round(v/1.60934));
		            sum = sum + Math.round(v/1.60934);
		            num++;
		        });
				
				
		        var finalkeys = keys.slice(0, 20);
		        var finalvalues = values.slice(0, 20);
				
		        var lineChartData = {
				labels :finalkeys,
				datasets : [
			
					{
						fillColor : "rgba(151,187,205,0.75)",
						strokeColor : "#004059",
						highlightFill : "rgba(151,187,205,0.75)",
						highlightStroke : "rgba(151,187,205,1)",
						data :  finalvalues
					}
				]

			}
			
			if(mile_cities_barchart_created){
				//alert("destroy");
				mile_cities_barchart.destroy();
			}
			
			var ctx = document.getElementById("mile_cityChart").getContext("2d");
		
		
			//var width = $(".chart_area").width();
			 document.getElementById('mile_cityChart').width = 2000-100;
			 document.getElementById('mile_cityChart').height = 800;
			options = {

				   animation: false,
                datasetStrokeWidth : 1,
               scaleShowGridLines : true,
				scaleFontSize: 25,
                barValueSpacing:8
	            };
				
			 mile_cities_barchart = new Chart(ctx).Bar(lineChartData, options);
			 mile_cities_barchart_created = true;
			 $scope.$parent.miles_done=(mile_cities_barchart_created&&mile_trends_linechart_created);
			 $scope.$digest();
				// alert();
				//  alert(keys);
				//  				alert(values);
// 				alert(num);
		}
			// a.style.display = "none";
		});
	
	
	//Impressions report goes here
		
		var impressions_trends_linechart;
		var impressions_trends_linechart_created=true;
		
		
		$scope.$watch("impressions_trendsjson", function(){
		
			if($scope.impressions_trendsjson!=undefined){
			impressions_trends_linechart_created=false;
			var keys = [];
		     var values = [];
			var sum = 0;
			var num = 0;
			 $.each($scope.impressions_trendsjson, function(k,v) {
		            keys.push(k);
		            values.push(Math.round(v/1.60934));
		            sum = sum + Math.round(v/1.60934);
		            num++;
		        });
				
		        var lineChartData = {
				labels :keys,
				datasets : [
			
					{
						fillColor : "rgba(151,187,205,0.75)",
						strokeColor : "#004059",
						highlightFill : "rgba(151,187,205,0.75)",
						highlightStroke : "rgba(151,187,205,1)",
						data :  values
					}
				]

			}
			
			if(impressions_trends_linechart_created){
				//alert("destroy");
				impressions_trends_linechart.destroy();
			}
			
			var ctx = document.getElementById("impression_trendChart").getContext("2d");
		
		
			//var width = $(".chart_area").width();
			 document.getElementById('impression_trendChart').width = 2000-100;
			 document.getElementById('impression_trendChart').height = 700;
			options = {
				   animation: false,
	               pointDot : false,
	               pointHitDetectionRadius : 2,
	               scaleShowGridLines : true,
				scaleFontSize: 25,
	               bezierCurve : true,
				pointDot : true
   
	            };
				$scope.total_impressions=sum;
				$scope.average_impressions=Math.ceil(sum/num);
			
			 impressions_trends_linechart = new Chart(ctx).Line(lineChartData, options);
			 impressions_trends_linechart_created = true;
			
			 $scope.$parent.impressions_done=(impressions_trends_linechart_created&&impressions_cities_barchart_created);
			// alert($scope.$parent.impressions_done);
			  $scope.$digest();
				// alert();
				//  alert(keys);
				//  				alert(values);
// 				alert(num);
		}
		});
		
		
		var impressions_cities_barchart;
		var impressions_cities_barchart_created=true;
		
		
		
		$scope.$watch("impressions_citiesjson", function(){

			if($scope.impressions_citiesjson!=undefined){
			impressions_cities_barchart_created=false;
			var keys = [];
		     var values = [];
			var sum = 0;
			var num = 0;
			 $.each($scope.impressions_citiesjson, function(k,v) {
		            keys.push(k);
		            values.push(Math.round(v/1.60934));
		            sum = sum + Math.round(v/1.60934);
		            num++;
		        });
				
				
		        var finalkeys = keys.slice(0, 20);
		        var finalvalues = values.slice(0, 20);
				
		        var lineChartData = {
				labels :finalkeys,
				datasets : [
			
					{
						fillColor : "rgba(151,187,205,0.75)",
						strokeColor : "#004059",
						highlightFill : "rgba(151,187,205,0.75)",
						highlightStroke : "rgba(151,187,205,1)",
						data :  finalvalues
					}
				]

			}
			
			if(impressions_cities_barchart_created){
				//alert("destroy");
				impressions_cities_barchart.destroy();
			}
			
			var ctx = document.getElementById("impression_cityChart").getContext("2d");
		
		
		//	var width = $(".chart_area").width();
			 document.getElementById('impression_cityChart').width = 2000-100;
			 document.getElementById('impression_cityChart').height = 800;
			options = {

				   animation: false,
                datasetStrokeWidth : 1,
               scaleShowGridLines : true,
				scaleFontSize: 25,
                barValueSpacing:8
	            };
				
			 impressions_cities_barchart = new Chart(ctx).Bar(lineChartData, options);
			 impressions_cities_barchart_created = true;
			 
			 $scope.$parent.impressions_done=(impressions_trends_linechart_created&&impressions_cities_barchart_created);
			// alert($scope.$parent.impressions_done);
			 $scope.$digest();
				// alert();
				//  alert(keys);
				//  				alert(values);
// 				alert(num);
		}
		});
	
	
		
	
    }]);
 
}());