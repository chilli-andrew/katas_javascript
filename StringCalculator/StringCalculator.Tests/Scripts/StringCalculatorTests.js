/// <reference path="../../stringcalculator/scripts/stringcalculator.js" />
module("String Calculator tests:");

function createStringCalculator() {
    return new stringCalculator();
}

test("add given empty string should return 0", function () {
    // Arrange
    var input = "";
    var expected = 0;
    var calc = createStringCalculator();
    // Act
    var result = calc.add(input);
    // Assert
    equal(result, expected);
});

test("add given single number string of 1 should return 1", function () {
    // Arrange
    var input = "1";
    var expected = 1;
    var calc = createStringCalculator();
    // Act
    var result = calc.add(input);
    // Assert
    equal(result, expected);
});

test("add given single number string of 2 should return 2", function () {
    // Arrange
    var input = "2";
    var expected = 2;
    var calc = createStringCalculator();
    // Act
    var result = calc.add(input);
    // Assert
    equal(result, expected);
});

test("add given two number string of '1,2' should return sum", function () {
    // Arrange
    var input = "1,2";
    var expected = 3;
    var calc = createStringCalculator();
    // Act
    var result = calc.add(input);
    // Assert
    equal(result, expected);
});

test("add given two number string of '5,7' should return sum", function () {
    // Arrange
    var input = "5,7";
    var expected = 12;
    var calc = createStringCalculator();
    // Act
    var result = calc.add(input);
    // Assert
    equal(result, expected);
});

test("add given three number string of '5,5,5' should return sum", function () {
    // Arrange
    var input = "5,5,5";
    var expected = 15;
    var calc = createStringCalculator();
    // Act
    var result = calc.add(input);
    // Assert
    equal(result, expected);
});