function createStringCalculator() {
    'use strict';

    var sumNumbers = function(input) {
        return input.split(',')
            .map(function (s) {
                var number = Number(s);
                if (number < 0) {
                    throw ('Negatives not allowed : ' + number);
                }
                return number;
            })
            .reduce(function (total, current) {
                return total + current;
            });
    };

    return {
        add: function (input) {
            if (input) {

                input = input.replace('\n', ',');
                if (input.indexOf('//') === 0) {
                    var delimiter = input[2];
                    input = input.substr(4);
                    input = input.replace(delimiter, ',');
                }

                return sumNumbers(input);
            }

            return 0;
        }
    };
}

