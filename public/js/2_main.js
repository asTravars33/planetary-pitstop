function open_modal(){
	console.log("Showing modal");
	$('#input_vals_modal').modal('show');
}
function displayInfo(){
	let moisture = document.getElementById("moisture").value;
	let result = document.getElementById("result").value;
	window.location.href = "http://localhost:3000/main?moisture="+moisture+"&result="+result;
}