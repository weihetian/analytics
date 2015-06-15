(function () {
 
    var app= angular.module('analytics');
    app.controller('dragpicController', ['$scope', function ($scope) {
		
		$scope.uploadimages=[];

		var dropzone = document.getElementById("dropzone");
		var upload = function(files){
		var formData = new FormData(),
		xhr = new XMLHttpRequest(),
		x;


		console.log("ok you good");

		for(x=0;x<files.length;x++){
		formData.append('file[]',files[x]);
		}

		xhr.onload = function(){
		var data=this.responseText;
		console.log("ok you good");
		console.log(data);
		var message_data  = $.parseJSON(data);
		var j;
		for(j=0;j<message_data.length;j++){
			$scope.uploadimages.push(message_data[j].file);
			
			//$('#uploads').append("<img class='upload_images' src='"+message_data[j].file+"'>");
		}
		$scope.$digest();
		}
		xhr.open('post','data_access/upload_images.php');
		xhr.send(formData);
		}
		
		dropzone.ondrop = function(e){
		e.preventDefault();
		this.className='dropzone';
		upload(e.dataTransfer.files);
		}
		
		
		dropzone.ondragover = function(){
		this.className='dropzone dragover';
		return false;
		};

		dropzone.ondragleave = function(){
		this.className = "dropzone";
		return false;
		};
		
		
    }]);
 
}());