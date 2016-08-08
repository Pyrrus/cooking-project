var output = [];

function main() {

  var out = true;

  while (out) {
      var input = prompt("Pick 1 for Gallons \nPick 2 for Quarts \nPick 3 for Pints \nPick 4 for Cups\nPick 5 for Out");
    if (input == "1") {
      gallons();
    } else if (input == "2") {
      quarts();
    } else if (input == "3") {
      pints();
    } else if (input == "4") {
      cups();
    } else if (input >= "5") {
      out = false;
    }


    if (input < 5)
      alert(output[0] + " " + output[1]);



    for (var i = output.length; i <= 0; i--) {
      output[i].pop();
    }

    output = 0;
    type = "";
  }
}

function gallons() {

var gallon = parseFloat(prompt("How many gallons?"));

var out = true;

var convert = 0;

var unit = "";

  while (out) {
      var input = prompt("What do you want to convert your gallons to?\nPick 1 for Quarts \nPick 2 for Pints \nPick 3 for Cups")

      if (input == "1") {
        convert= gallon * 4;
        unit = "quarts";
        out = false;
      } else if (input == "2") {
        convert= gallon * 8;
        unit = "pints";
        out = false;
      } else if (input == "3") {
        convert= gallon * 16;
        unit = "cups";
        out = false;
      } else if (input >= "4") {
        convert = 0;
        out = false;
      }
  }

  output  = [convert, unit];

}

function quarts() {

var quart = parseFloat(prompt("How many quarts?"));

var out = true;

var convert = 0;

var unit = "";

  while (out) {
      var input = prompt("What do you want to convert your quarts to?\nPick 1 for Gallons \nPick 2 for Pints \nPick 3 for Cups")

      if (input == "1") {
        convert = quart / 4;
        unit = "gallons";
        out = false;
      } else if (input == "2") {
        convert = quart * 4;
        unit = "pints";
        out = false;
      } else if (input == "3") {
        convert = quart * 8;
        unit = "cups";
        out = false;
      } else if (input >= "4") {
        convert = 0;
        out = false;
      }
  }

  output  = [convert, unit];

}

function pints() {

  var pint = parseFloat(prompt("How many pints?"));

  var out = true;

  var convert = 0;

  var unit = "";

    while (out) {
      var input = prompt("What do you want to convert your quarts to?\nPick 1 for Gallons \nPick 2 for Quarts \nPick 3 for Cups")

      if (input == "1") {
        convert = pint / 8;
        unit = "gallons";
        out = false;
      } else if (input == "2") {
        convert = pint / 4;
        unit = "quarts";
        out = false;
      } else if (input == "3") {
        convert = pint * 2;
        unit = "cups";
        out = false;
      } else if (input >= "4") {
        convert = 0;
        out = false;
      }
    }
    output  = [convert, unit];
}

function cups() {

  var cup = parseFloat(prompt("How many cups?"));

  var out = true;

  var convert = 0;

  var unit = "";

    while (out) {
      var input = prompt("What do you want to convert your quarts to?\nPick 1 for Gallons \nPick 2 for Quarts \nPick 3 for Pints")
      if (input == "1") {
      convert = cup / 16;
      unit = "gallons";
      out = false;
    } else if (input == "2") {
      convert = cup / 8;
      unit = "quarters";
      out = false;
    } else if (input == "3") {
      convert = cup / 4;
      unit = "pints";
      out = false;
    } else if (input >= "4") {
      convert = 0;
      out = false;
    }
  }
  output  = [convert, unit];
}

main();
