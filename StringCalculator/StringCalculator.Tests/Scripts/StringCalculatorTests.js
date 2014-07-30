/// <reference path="../../stringcalculator/scripts/stringcalculator.js" />
module("String Calculator Tests:");
test("Add given empty string returns 0", function() {
    var calculator = new stringCalculator();

    var result = calculator.add("");
    equal(0, result);
});

test("Add given single number string of 1 returns 1", function() {
    var calculator = new stringCalculator();

    var result = calculator.add("1");
    equal(1, result);
});

test("Add given single number string of 2 returns 2", function() {
    var calculator = new stringCalculator();

    var result = calculator.add("2");
    equal(2, result);
});
