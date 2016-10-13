
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var currentBand = "";
var space = " ";
for (var i = 0; i < bands.length; i += 1) {
currentBand += "<p>" + bands[i] + "</p>";
var bandElement = document.getElementById("boy-bands");
	// console.log(currentBand);

	
	// currentBand = i;
	bandElement.innerHTML = space + currentBand;
}

var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var currentVeggie = " ";
for (var j = 0; j < vegetables.length; j += 1) {
currentVeggie += "<p>" + vegetables[j] + "</p>";
var veggieElement = document.getElementById("vegetables");

veggieElement.innerHTML = currentVeggie;
	}
