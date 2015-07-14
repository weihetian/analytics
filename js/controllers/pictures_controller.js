(function () {
 
    var app= angular.module('analytics');
    app.controller('picturesController', ['$scope', function ($scope) {
		
		$scope.showdelete;
		
		
		$scope.$watch("images_data", function(){
			if($scope.images_data!=undefined){
			$scope.images = $scope.images_data;
	  	  $scope.$parent.$parent.pictures_done=true;
			$scope.$digest();
		}
		})
		
		
		$scope.hover = function(id){
			$scope.showdelete = id;
			$scope.$digest();
		}
		
		$scope.hover_end = function(){
			$scope.showdelete = -1;
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

		
		
		$scope.delete = function(id){
			var dataString = "picid="+id;

			$.ajax({

			type: "POST",
			url: "data_access/delete_image.php",
			datatype: "html",
			data: dataString,
			success: function(data) {
				removeByAttr($scope.images, 'id', id);
				$scope.$digest();
			}})
		}
		
	 }]);

}());