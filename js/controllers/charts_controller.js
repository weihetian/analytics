(function () {
 
    var app= angular.module('analytics');
    app.controller('chartsController', ['$scope', function ($scope) {
		
		var trends_linechart;
		var trends_linechart_created=false;
		
		$scope.$watch("trendsjson", function(){
			if($scope.trendsjson!=undefined){
			
			var keys = [];
		     var values = [];
			var sum = 0;
			var num = 0;
			 $.each($scope.trendsjson, function(k,v) {
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
			
			if(trends_linechart_created){
				//alert("destroy");
				trends_linechart.destroy();
			}
			
			var ctx = document.getElementById("mile_trendChart").getContext("2d");
		
		
			var width = $(".chart_area").width();
			 document.getElementById('mile_trendChart').width = width;
			 document.getElementById('mile_trendChart').height = 400;
			options = {
	               pointDot : false,
	               pointHitDetectionRadius : 2,
	               scaleShowGridLines : true,
	               bezierCurve : true,
				pointDot : true
   
	            };
				
			 trends_linechart = new Chart(ctx).Line(lineChartData, options);
			 trends_linechart_created = true;
				// alert();
				//  alert(keys);
				//  				alert(values);
// 				alert(num);
		}
		});
		
		
		var cities_barchart;
		var cities_barchart_created=false;
		
		$scope.$watch("citiesjson", function(){
			if($scope.citiesjson!=undefined){
			
			var keys = [];
		     var values = [];
			var sum = 0;
			var num = 0;
			 $.each($scope.citiesjson, function(k,v) {
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
			
			if(cities_barchart_created){
				//alert("destroy");
				cities_barchart.destroy();
			}
			
			var ctx = document.getElementById("mile_cityChart").getContext("2d");
		
		
			var width = $(".chart_area").width();
			 document.getElementById('mile_cityChart').width = width;
			 document.getElementById('mile_cityChart').height = 500;
			options = {
                datasetStrokeWidth : 1,
               scaleShowGridLines : true,
                barValueSpacing:8
	            };
				
			 cities_barchart = new Chart(ctx).Bar(lineChartData, options);
			 cities_barchart_created = true;
				// alert();
				//  alert(keys);
				//  				alert(values);
// 				alert(num);
		}
		});
	
	
		
	
    }]);
 
}());