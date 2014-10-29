var createStringCalculator = function () {
    var checkForNegatives = function(numbers) {
        var negatives = numbers.filter(function(n) {
            return n < 0;
        });
        if (negatives.length > 0) {
            throw 'negatives not allowed: ' + negatives.join();
        }
    };

    var sumNumbers = function(numbers) {
        return numbers.reduce(function (total, current) {
            return total + current;
        });
    };

    var parseInput = function(input) {
        return input.split(',')
                .map(function (s) {
                    var number = Number(s);
                    return number;
                });
    };

    return {
        add: function (input) {
            if (!input) {
                return 0;
            }
            input = input.replace('\n', ',');
            var numbers = parseInput(input);
            checkForNegatives(numbers);
            return sumNumbers(numbers);
        }
    };
};
