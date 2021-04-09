function refl(size, arr) {
	var output = "";
	for (var i = 0; i < size; i++) {
		if (arr[i][i] != 1) {
			output += "Отношение не рефлекисивно";
			break;
		}
	}
	output += "Отношение рефлекисивно";
	console.log(output);
	document.getElementById("refl").innerHTML = output;
}

function validate() {
	var input = document.getElementById("input").value.split(/ /);
	var corr = 1;

	console.log(input);

	size = document.getElementById("size").value;
	var arr = new Array(size);
	for (var i = 0; i < size; i++) {
		arr[i] = new Array(size);
		for (var j = 0; j < size; j++) {
			arr[i][j] = 0;
		}
	}
	console.log(input.length);
	if (input.length % 2 == 0) {
		for (var i = 0; i < input.length; i += 2) {
			console.log(input[i + 1], input[i]);
			if (input[i + 1] >= size || input[i] >= size){
				alert("Координаты вышли за рамки массива");
				corr = 0;
				break;
			}
			else if (!/\d/.test(input[i + 1]) || !/\d/.test(input[i])){
				alert("Введено что-то кроме чисел");
				corr = 0;
				break;
			}
			else{
				//console.log(input[i + 1], input[i]);
				arr[input[i + 1]][input[i]] = 1;
			}
		}
	}
	else {
		alert("Введен лишний символ");
		corr = 0;
	}
	if (corr == 1){
		refl(size, arr);
	}
	
	var output = new String();
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			output += arr[i][j];
			output += " ";
		}
		output += "\n";
	}
	document.getElementById("output").value = output;
}