$(document).ready(function(){
	    var teksti = $('<p> Miltä tuntui?</p>');
		$(".nappi").on("click",function(){
		$("#tunnus").append(teksti);
		$(".nappi").remove();
		});
});