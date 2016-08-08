var gallon = parseFloat(prompt("How many Gallons?"));

var out = true;

while (out) {
    var input = prompt("Pick 1 to Quarts \nPick 2 to Pints \nPick 3 for Cups")

    if (input == "1") {
      var convertQuart = gallon * 4;
      alert(convertQuart + " quarts!");
      out = false;
    } else if (input == "2") {
      var convertPint = gallon * 8;
      alert(convertPint + " pints!");
      out = false;
    } else if (input == "3") {
      var convertCups = gallon * 16;
      alert(convertCups + " cups!");
      out = false;
    } else if (input >= "4") {
      out = false;
    }
}
