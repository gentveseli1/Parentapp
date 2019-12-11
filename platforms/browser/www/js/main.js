let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://javascript.info/xmlhttprequest')
	xhr.send([body])
//////////////////////////////////////////////////////////

// function loadXMLDoc(){
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 	    if (this.readyState == 4 && this.status == 200) {
// 	       document.getElementById("demo").innerHTML = this.responseText;
// 	    }
// 	};
// 	xhttp.open("GET", "http://localhost/mobile/1mobile.html", true);
// 	xhttp.send();
// }

//////////////////////////////////////////////////////////

// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'http://localhost/mobile/1mobile.html');
// ourRequest.onload = function(){
// 	console.log(ourRequest.responseText);
// };
// ourRequest.send();

///////////////////////////////////////////////////////

// $(function (){

// 	$.ajax({
// 		type: 'GET',
// 		url: '',
// 		success: function(data){
// 			console.log('success', data);
// 		}		
// 	});

// });

$('.hamburger').click(function(){
	alert('aa')
	$('.bbros-side-bar').css('left','0')
})