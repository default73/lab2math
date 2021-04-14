function validate() {
	var matrix = document.getElementById("matrix");
	var arr = new Array(4);	
	var error = 0;
	
	
	for (var i = 0; i < 4; i++){
		arr[i] = new Array(4);
		for (var j = 0; j < 4; j++){
			var id = "a" + i + j;
			n = document.getElementById(id).value;
			if (n == 0 || n == 1){
				arr[i][j] = n;
			}
			else{
				alert("Проверьте правильность ввода");
				error = 1;
				break;
			}
		}
	}
	if (error == 0){
		
	}
	console.log(arr);
}