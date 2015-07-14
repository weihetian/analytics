(function () {
 
    var app= angular.module('analytics');
    app.controller('mapsController', ['$scope', function ($scope) {

	 
	//	$scope.maps_done=true;
		
		function update_maps(){
			
		    var mapOptions = {

		    scrollwheel: false,
		      zoom: 11,
			styles:[{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}],

		      center: new google.maps.LatLng(39.739077, -75.540986),
		      mapTypeId: google.maps.MapTypeId.ROADMAP
		    };
		  map = new google.maps.Map(document.getElementById('tracking'),
		        mapOptions);


				var startdate = $scope.map_start_date;


				var start = $( "#pathdate" ).datepicker( "getDate" );




				var starty = start.getFullYear();

				var startm = start.getMonth()+1;
				if(startm <10){
					startm = "0"+startm;

				}

				var startd = start.getDate();
				if(startd <10){
					stard = "0"+startd;
				}

				start.setDate(start.getDate()+1);
				var endy = start.getFullYear();

				var endm = start.getMonth()+1;
				if(endm <10){
					endm = "0"+endm;

				}

				var endd = start.getDate();
				if(endd <10){
					endd = "0"+endd;
				}

				var startdate = starty+"-"+startm+"-"+startd;

				var enddate = endy+"-"+endm+"-"+endd;

				var dataString='campaignid='+$scope.current_campaign_id+"&start="+startdate+"&end="+enddate;
				//alert(dataString);
			//	alert(dataString);
				$.ajax({
					type: "POST",
					url: "data_access/pull_path.php",
					datatype: "html",
					data: dataString,
					success: function(data) {
						var json=$.parseJSON(data);
						console.log(json);
						for (var i = 0; i < json.length; i++) {


							var trackinglocations=[];
							var singledata=$.parseJSON(json[i]);
							if(singledata.features!=undefined){
								for(var j = 0; j<singledata.features.length;j++)
								{
									//console.log(singledata.features);


									var point =  new google.maps.LatLng(singledata.features[j].geometry.coordinates[1],parseFloat(singledata.features[j].geometry.coordinates[0]));
									trackinglocations.push(point);
								}
							}
						  var polyline = new google.maps.Polyline({
						    path: trackinglocations,
						    geodesic: true,
						    strokeColor: "#c0392b",
						    strokeOpacity: 1,
						    strokeWeight: 6,
						    map:map
						  });
						 
						}
				  	  $scope.$parent.$parent.maps_done=true;
				  	  $scope.$apply();
  	  				 // $scope.$digest();
					}
				 
				})
		}

		$scope.$watch("map_start_date", function(){
			if($scope.map_start_date!=undefined){
			//	alert();
			update_maps();

		}
		})

	    $(function() {
			$( "#pathdatepicker" ).datepicker();

	    	// var cid = $('#campaignstart').val();
	    	// var date = new Date(cid);
	    	// var day = date.getDate()+1;
	    	//   var month = date.getMonth();
	    	//   var year = date.getFullYear();
	    	// 	       $( "#pathdatepicker" ).datepicker({ dateFormat: 'mm/dd/yy'}).datepicker("setDate", new Date(year,month,day));
	     });

		$scope.dateleft=function(){
			var current = $( "#pathdatepicker" ).datepicker( "getDate" );
			  current.setDate(current.getDate()-1);
			 $( "#pathdatepicker" ).datepicker("setDate", current);

			 $scope.map_start_date= $( "#pathdatepicker" ).val();
		}


		$scope.dateright=function(){
			var current = $( "#pathdatepicker" ).datepicker( "getDate" );
			var d = new Date();

			if(current.getMonth()==d.getMonth() && current.getDate() < d.getDate()-1){
			  current.setDate(current.getDate()+1);
			  $( "#pathdatepicker" ).datepicker("setDate", current);
		 	  $scope.map_start_date= $( "#pathdatepicker" ).val();
	 	 	}else if(current.getMonth()<d.getMonth() ){
	 		   	current.setDate(current.getDate()+1);
				$( "#pathdatepicker" ).datepicker("setDate", current);
			 $scope.map_start_date= $( "#pathdatepicker" ).val();
			}
		}
    }]);
 
}());