$(document).ready(function(){
	
	makeSquares(16);

	$('button').click(function() {
	    calculateSide();
	}); 

	$(".container").on("mouseenter", "tr > td > div", function(){ //event delegation
			darken($(this));
	});

	
});

function makeSquares(sideCount){
	for (i = 0; i < sideCount; i++){
		$(".container").append('<tr id="' + i + '">')
		for (j = 0; j < sideCount; j++){
			$(".container > #" + i).append('<td><div></div></td>');
		}
		$(".container").append('</tr>')
	}
}

function calculateSide(){
	$("tr").remove();
	var new_side = prompt("How many squares do you want on each side?")
	
	makeSquares(new_side);
}

function darken(div){
	
	var rgbvalue = div.css("background-color")
	var rgb = rgbvalue.match(/\d+/g);
	//console.log(rgb)
	
	if ((rgb[0] > 10) && (rgb[1] > 10) && (rgb[2] > 10)){
		rgb[0] -= 20
		rgb[1] -= 20
		rgb[2] -= 20
		new_rgb = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")"
		rgb = new_rgb
	}
	
	//console.log(rgb)
	div.css({
		"background-color": rgb
	})
	
}