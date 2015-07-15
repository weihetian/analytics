(function () {
 
    var app= angular.module('analytics');
    app.controller('checkboxController', ['$scope', function ($scope) {
		
		$scope.$watch("mile_report_trends", function(){
			if($scope.mile_report_trends){
				
			}
		});
		
		
	    var doc = new jsPDF('p', 'mm', [210,297]);
	                  
		
		
		$scope.mile_trend_report = false;
		$scope.mile_cities_report=false;
		$scope.impression_trend_report = false;
		$scope.impression_cities_report=false;
		$scope.cover = false;
		$scope.map_report = false;
		$scope.story_report = false;
		$scope.picture_report = false;
		
		
		$scope.pdf_pages = 0;
		
		
		$scope.start_generating = false;
		
		
		var processing = false;
		
		var getorder=function(){
			$scope.pdf_pages++;
			return $scope.pdf_pages;
		}
		var cover_inorder=false;
		var miles_inorder = false;
		
		var impressions_inorder=false;
		var maps_inorder=false;
		var pictures_inorder=false;
		var stories_inorder=false;
			
		
		// $scope.pdf_done=false;
			
		// $scope.create_chart = function(id){
	// 		if(id==1)
	// 		{
	//
	// 		}
	// 	}
	//	
	
	
	$scope.print = function(){
	

		// var a = document.getElementById("hide_area");
// 		a.style.display = "block";
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
											 // a.style.display = "none";
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	}
	
	$scope.print_miles_report = function(){
		if(processing){
			alert("The system is generating another page, please wait till it's done.");
			return;
		}
		if(!miles_inorder){
			processing=true;
			miles_inorder=true;
		$(".miles_order").html(getorder());
		$(".miles_order").show();
		// var a = document.getElementById("hide_area");
	// 	a.style.display = "block";
 		html2canvas($('#mile_report_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								doc.addPage();
 							//    var doc = new jsPDF('p', 'mm',[210,297]);
 							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
											  $(".miles_btn").removeClass('blue-flat-button');
											  $(".miles_btn").addClass('gray-flat-button');
											  processing=false;
											//  alert();
 							      //           doc.save('miles.pdf');

									 		// a.style.display = "none";
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	 }
	}
	
	$scope.print_impressions_report = function(){
		if(processing){
			alert("The system is generating another page, please wait till it's done.");
			return;
		}
		//
		// var a = document.getElementById("hide_area");
		// a.style.display = "block";
		if(!impressions_inorder){
			processing = true;
			impressions_inorder=true;
		$(".impressions_order").html(getorder());
		$(".impressions_order").show();
 		html2canvas($('#impressions_report_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								doc.addPage();
 							//    var doc = new jsPDF('p', 'mm',[210,297]);
 							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
											  $(".impressions_btn").removeClass('blue-flat-button');
											  $(".impressions_btn").addClass('gray-flat-button');
											  processing = false;
 							     //            doc.save('impressions.pdf');
											 	// a.style.display = "none";
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	 }
	}
	
	$scope.show_maps_sample = function(){
		
		//$( ".datepicker" ).datepicker();
		$scope.map_start_date=$("#start").val();
		$('#sample_pathdatepicker').datepicker('setDate', new Date($("#start").val()));
// 		$scope.map_start_date=$("#start").val();
//	alert($("#start").val());
    var mapOptions = {

    scrollwheel: false,
      zoom: 11,
		
      center: new google.maps.LatLng(39.739077, -75.540986),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  	var map = new google.maps.Map(document.getElementById('tracking_sample'),
        mapOptions);
		$('.middle_layer').show();
		$('.map_selector').show();
		$scope.testout();
	}
	
	$scope.print_maps_report = function(){
		if(processing){
			alert("The system is generating another page, please wait till it's done.");
			return;
		}
		if(!maps_inorder){
			processing = true;
   		 maps_inorder=true;
		$(".maps_order").html(getorder());
		$(".maps_order").show();
		html2canvas($('#maps_print'), {
			background :'#FFFFFF',
		                        useCORS: true,
		                        onrendered: function(canvas) {
		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								doc.addPage();
							 //   var doc = new jsPDF('p', 'mm',[210,297]);
							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
											  $(".maps_btn").removeClass('blue-flat-button');
											  $(".maps_btn").addClass('gray-flat-button');
											  processing = false;
							    //              doc.save('maps.pdf');
	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";

								             // window.open(myImage);
		                        }
		 });
	 }
	}
	
	$scope.print_pictures_report=function(){
		if(processing){
			alert("The system is generating another page, please wait till it's done.");
			return;
		}
		if(!pictures_inorder){
			processing=true;
			pictures_inorder=true;
		$(".pictures_order").html(getorder());
		$(".pictures_order").show();
 		html2canvas($('#pictures_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								doc.addPage();
 							  //  var doc = new jsPDF('p', 'mm',[210,297]);
 							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
											  $(".pictures_btn").removeClass('blue-flat-button');
											  $(".pictures_btn").addClass('gray-flat-button');
											  processing = false;
 							   //              doc.save('pictures.pdf');
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	 }
	}
	
	$scope.print_stories_report=function(){
		// var a = document.getElementById("hide_area");
	// 	a.style.display = "block";
	if(processing){
		alert("The system is generating another page, please wait till it's done.");
		return;
	}
	if(!stories_inorder){
		processing = true;
		stories_inorder=true;
	$(".stories_order").html(getorder());
	$(".stories_order").show();
 		html2canvas($('#stories_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								doc.addPage();
 							 //   var doc = new jsPDF('p', 'mm',[210,297]);
 							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
											  $(".stories_btn").removeClass('blue-flat-button');
											  $(".stories_btn").addClass('gray-flat-button');
											  processing =false;
 							 //                doc.save('stores.pdf');
											    // a.style.display = "none";
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	 }
	}
	
	$scope.print_cover_report = function(){

		// var a = document.getElementById("hide_area");
// 		a.style.display = "block";
if(!cover_inorder){
	processing = true;
    cover_inorder=true;
$(".cover_order").html(getorder());
$(".cover_order").show();
 		html2canvas($('#cover_print'), {
			  				background :'#FFFFFF',
 		                        onrendered: function(canvas) {
 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
								
 							   // var doc = new jsPDF('p', 'mm', [210,297]);
							 //  doc.addPage();
							 $scope.$parent.cover_done = true;
 							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
											  $(".cover_btn").removeClass('blue-flat-button');
											  $(".cover_btn").addClass('gray-flat-button');
											  processing = false;
											 	$scope.$digest();
											//  alert();
											  
 							 //                doc.save('cover.pdf');

									 		// a.style.display = "none";
 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
						
 								        //      window.open(myImage);
 		                        }
 		 });
	 }
	}
	
	
	//Print full report	
	$scope.print_full_pdf = function(){
		 doc.save('pictures.pdf');
	    // var doc = new jsPDF('p', 'mm', [210,297]);
 //
 //
 // 		//Print Cover
 // 		html2canvas($('#cover_print'), {
 // 			  				background :'#FFFFFF',
 // 		                        onrendered: function(canvas) {
 // 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
 //
 // 							  //  var doc = new jsPDF('p', 'mm', [210,297]);
 // 							  doc.addPage();
 // 							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
 //
 // 									 		 doc.save('pictures.pdf');
 // 							                 //doc.save('cover.pdf');
 // 											// doc.output('save', 'pdfs/cover.pdf');
 // 								//			 var url = doc.output('datauristring');
 // 								//			 alert(url);
 // 									 		// a.style.display = "none";
 // 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
 //
 // 								        //      window.open(myImage);
 // 		                        }
 // 		 });
 //
 //
 //
 // 		 //Print mile report
 //  		html2canvas($('#mile_report_print'), {
 // 			  				background :'#FFFFFF',
 //  		                        onrendered: function(canvas) {
 //  		                      	var myImage = canvas.toDataURL( 'image/JPEG');
 //
 //  							   // var doc = new jsPDF('p', 'mm',[210,297]);
 // 							   doc.addPage();
 //  							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
 //
 // 									 		 doc.save('pictures.pdf');
 //  							              //   doc.save('miles.pdf');
 // 											 // doc.output('save', 'pdfs/miles.pdf');
 // 									//		 var url = doc.output('datauristring');
 // 								//			 alert(url);
 // 									 		// a.style.display = "none";
 //  	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
 //
 //  								        //      window.open(myImage);
 //  		                        }
 //  		 });
 //
 //
 // 		 //Print Impressions
 //  		html2canvas($('#impressions_report_print'), {
 // 			  				background :'#FFFFFF',
 //  		                        onrendered: function(canvas) {
 //  		                      	var myImage = canvas.toDataURL( 'image/JPEG');
 //
 //  							 //   var doc = new jsPDF('p', 'mm',[210,297]);
 // 							 doc.addPage();
 //  							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
 //
 // 									 		 doc.save('pictures.pdf');
 //  							               //  doc.save('impressions.pdf');
 // 										 //    doc.output('save', 'pdfs/impressions.pdf');
 // 							//			 var url = doc.output('datauristring');
 // 								//		 alert(url);
 // 											 	// a.style.display = "none";
 //  	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
 //
 //  								        //      window.open(myImage);
 //  		                        }
 //  		 });
 //
 // 		 //Print maps
 // 		html2canvas($('#maps_print'), {
 // 			background :'#FFFFFF',
 // 		                        useCORS: true,
 // 		                        onrendered: function(canvas) {
 // 		                      	var myImage = canvas.toDataURL( 'image/JPEG');
 //
 // 						//	    var doc = new jsPDF('p', 'mm',[210,297]);
 // 						doc.addPage();
 // 							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
 //
 // 									 		 doc.save('pictures.pdf');
 // 							                  //doc.save('maps.pdf');
 // 									//		 var url = doc.output('datauristring');
 // 									//		 alert(url);
 //
 // 										  //   doc.output('save', 'pdfs/maps.pdf');
 // 	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
 //
 // 								             // window.open(myImage);
 // 		                        }
 // 		 });
 //
 // 		 //Print pictures
 //  		html2canvas($('#pictures_print'), {
 // 			  				background :'#FFFFFF',
 //  		                        onrendered: function(canvas) {
 //  		                      	var myImage = canvas.toDataURL( 'image/JPEG');
 //
 //  						//	    var doc = new jsPDF('p', 'mm',[210,297]);
 // 						doc.addPage();
 //  							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
 //
 // 									 		 doc.save('pictures.pdf');
 //  							                // doc.save('pictures.pdf');
 // 								//		 var url = doc.output('datauristring');
 // 							//			 alert(url);
 // 											 // doc.output('save', 'pdfs/pictures.pdf');
 //  	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
 //
 //  								        //      window.open(myImage);
 //  		                        }
 //  		 });
 //
 //
 //
 // 		//Print stories
 //  		html2canvas($('#stories_print'), {
 // 			  				background :'#FFFFFF',
 //  		                        onrendered: function(canvas) {
 //  		                      	var myImage = canvas.toDataURL( 'image/JPEG');
 //
 //  							//    var doc = new jsPDF('p', 'mm',[210,297]);
 // 							doc.addPage();
 //  							                  doc.addImage(myImage, 'JPEG', 0, 0,210,297);
 //
 // 									 		 doc.save('pictures.pdf');
 //  							               //  doc.save('stores.pdf');
 // 										//	  doc.output('save', 'pdfs/stores.pdf');
 // 							//		 var url = doc.output('datauristring');
 // 							//		 alert(url);
 // 											    // a.style.display = "none";
 //  	                         //  document.getElementById("pdf_canvas").innerHTML= "<a download='test' href='"+myImage+"'>this is test</a>";
 //
 //  								        //      window.open(myImage);
 //  		                        }
 //  		 });
	}
		
	
		$scope.cover = true;
		$scope.generate = function(){
			
			$('.middle_layer').show();
			$('.pdf_btn_area').show();
			
			
			$scope.start_generating = true;
			//alert();
			//if($scope.cover_report){
				
					$scope.cover = true;
					$scope.$parent.cover_done = false;
					$scope.$parent.show_cover_btn=true;
		//	}
			if($scope.mile_report_trends){
				//alert("mile");
			
					$scope.$parent.show_miles_btn=true;
					$scope.$parent.miles_done = false;
					
				
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
				
					$scope.$parent.show_miles_btn=true;
					$scope.$parent.miles_done = false;
				//	alert();
				
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
				// if($scope.impression_report_cities)
// 				{
					$scope.$parent.show_impressions_btn=true;
					$scope.$parent.impressions_done = false;
					//}
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
				// if($scope.impression_report_trends)
// 				{
					$scope.$parent.show_impressions_btn=true;
					$scope.$parent.impressions_done = false;
				// }
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
				$scope.$parent.show_maps_btn=true;
				$scope.map_report = true;
				$scope.$parent.maps_done = false;
				$('#pathdatepicker').datepicker('setDate', new Date($("#pathdate").val()));
				$scope.map_start_date=$("#pathdate").val();
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
				$scope.$parent.show_stories_btn =true;
				$scope.$parent.stories_done = false;
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
				$scope.$parent.show_pictures_btn=true;
				$scope.$parent.pictures_done = false;
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
			
			$scope.print_cover_report()
			
			
		// $("html, body").delay(500).animate({ scrollTop: $('.report_area').offset().top }, 1000);
		}
		
		
    }]);
 
}());