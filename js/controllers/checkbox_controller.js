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
		$scope.map_report = false;
		$scope.story_report = false;
		$scope.picture_report = false;
		
		
		$scope.map_start_date;
			
		// $scope.create_chart = function(id){
	// 		if(id==1)
	// 		{
	//
	// 		}
	// 	}
	//	
	
	
	$scope.print = function(){
	
		
		// html2canvas($('#tracking'), {
// 		                        useCORS: true,
// 		                        onrendered: function(canvas) {
// 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
//
// 							    var doc = new jsPDF('p', 'mm');
// 							                  doc.addImage(myImage, 'JPEG', 5, 5,200,100);
// 							                  doc.save('maps.pdf');
// 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
//
// 								             // window.open(myImage);
// 		                        }
// 		 });
 		html2canvas($('#mile_report_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								
 							    var doc = new jsPDF('p', 'mm');
 							                  doc.addImage(myImage, 'JPEG', 5, 5,200,200);
 							                 doc.save('miles.pdf');
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	}
	
	$scope.print_miles_report = function(){
 		html2canvas($('#mile_report_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								
 							    var doc = new jsPDF('p', 'mm');
 							                  doc.addImage(myImage, 'JPEG', 5, 5,200,200);
 							                 doc.save('miles.pdf');
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	}
	
	$scope.print_impressions_report = function(){
 		html2canvas($('#impressions_report_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								
 							    var doc = new jsPDF('p', 'mm');
 							                  doc.addImage(myImage, 'JPEG', 5, 5,200,200);
 							                 doc.save('impressions.pdf');
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	}
	
	$scope.print_maps_report = function(){
		html2canvas($('#tracking'), {
		                        useCORS: true,
		                        onrendered: function(canvas) {
		                      	var myImage = canvas.toDataURL( 'image/JPEG');

							    var doc = new jsPDF('p', 'mm');
							                  doc.addImage(myImage, 'JPEG', 5, 5,200,100);
							                  doc.save('maps.pdf');
	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";

								             // window.open(myImage);
		                        }
		 });
	}
	
	$scope.print_pictures_report=function(){
 		html2canvas($('#pictures_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								
 							    var doc = new jsPDF('p', 'mm');
 							                  doc.addImage(myImage, 'JPEG', 5, 5,200,100);
 							                 doc.save('pictures.pdf');
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	}
	
	$scope.print_stories_report=function(){
 		html2canvas($('#stories_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								
 							    var doc = new jsPDF('p', 'mm');
 							                  doc.addImage(myImage, 'JPEG', 5, 5,200,100);
 							                 doc.save('stores.pdf');
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	}
	
	$scope.print_cover_report = function(){
 		html2canvas($('#cover_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								
 							    var doc = new jsPDF('p', 'mm');
 							                  doc.addImage(myImage, 'JPEG', 0, 0,200,150);
 							                 doc.save('cover.pdf');
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	}
		
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

				$scope.map_report = true;
				$('#pathdatepicker').datepicker('setDate', new Date($("#start").val()));
				$scope.map_start_date=$("#start").val();
				// var dataString='campaignid='+$scope.current_campaign_id;
	// 			var startdate = $("#start").val();
	//
	// 			$.ajax({
	// 				type: "POST",
	// 				url: "data_access/pull_stories.php",
	// 				datatype: "html",
	// 				data: dataString,
	// 				success: function(data) {
	// 					//$scope.$digest();alert(data);
	//
	// 					$scope.stories_data = $.parseJSON(data);
	//
	// 					$scope.$digest();
	// 				}
	// 			})
			}
			if($scope.story_report){
				var dataString='campaignid='+$scope.current_campaign_id;
				
				$.ajax({
					type: "POST",
					url: "data_access/pull_stories.php",
					datatype: "html",
					data: dataString,
					success: function(data) {
						//$scope.$digest();alert(data);

						$scope.story_report = true;
						$scope.stories_data = $.parseJSON(data);

						$scope.$digest();
					}
				})
			}
			if($scope.pic_report){
				var dataString='campaignid='+$scope.current_campaign_id;
				
				$.ajax({
					type: "POST",
					url: "data_access/pull_images.php",
					datatype: "html",
					data: dataString,
					success: function(data) {
						//$scope.$digest();alert(data);

						$scope.picture_report = true;
						$scope.images_data = $.parseJSON(data);

						$scope.$digest();
					}
				})
			}
			
			
		 $("html, body").delay(500).animate({ scrollTop: $('.report_area').offset().top }, 1000);
		}
		
		
    }]);
 
}());