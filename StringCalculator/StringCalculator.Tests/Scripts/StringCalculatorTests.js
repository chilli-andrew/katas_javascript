/// <reference path="../../stringcalculator/scripts/stringcalculator.js" />
module("String Calculator Tests:");
var createStringCalculator = function () {
    return new stringCalculator();
};

 //note to self - qunit has actual, expected, message 
 //this is different to nunit which is expected, actual, message
test("add given empty string should return 0", function () {
    var numbers = "";
    var expected = 0;
    var calc = createStringCalculator();
    var result = calc.add(numbers);
    equal(result, expected);
});

test("add given single number string of 1 should return 1", function() {
    var numbers = "1";
    var expected = 1;
    var calc = createStringCalculator();
    var result = calc.add(numbers);
    equal(result, expected);
});

test("add given single number string of 2 should return 2", function() {
    var numbers = "2";
    var expected = 2;
    var calc = createStringCalculator();
    var result = calc.add(numbers);
    equal(result, expected);
});

test("add given two numbers separated by a comma should return sum", function() {
    var numbers = "1,2";
    var expected = 3;
    var calc = createStringCalculator();
    var result = calc.add(numbers);
    equal(result, expected);
});