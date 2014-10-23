/*global describe, it, expect, createStringCalculator, beforeEach */
describe('string calculator', function () {
    'use strict';

    describe('add', function() {
        it('should return 0 given input is empty string', function () {
            var result, expected, calc;
            calc = createStringCalculator();
            expected = 0;
            result = calc.add('');
            expect(result).toEqual(expected);
        });

        it('should return 0 given input is undefined', function () {
            var result, expected, calc;
            calc = createStringCalculator();
            expected = 0;
            result = calc.add(undefined);
            expect(result).toEqual(expected);
        });

        it('should return single digit number given single digit input', function () {
            var result, expected, calc;
            calc = createStringCalculator();
            expected = 1;
            result = calc.add('1');
            expect(result).toEqual(expected);
        });

        it('should return double digit number given double digit input', function () {
            var result, expected, calc;
            calc = createStringCalculator();
            expected = 13;
            result = calc.add('13');
            expect(result).toEqual(expected);
        });

        it('should return sum given input as two comma separated digits', function () {
            var result, expected, calc;
            calc = createStringCalculator();
            expected = 3;
            result = calc.add('1,2');
            expect(result).toEqual(expected);
        });

        it('should return sum given input as many comma separated digits', function () {
            var result, expected, calc;
            calc = createStringCalculator();
            expected = 6;
            result = calc.add('1,2,3');
            expect(result).toEqual(expected);
        });

        it('should return sum given input as two newline separated digits', function () {
            var result, expected, calc;
            calc = createStringCalculator();
            expected = 7;
            result = calc.add('3\n4');
            expect(result).toEqual(expected);
        });

        it('should return sum given input as comma and newline separated digits', function () {
            var result, expected, calc;
            calc = createStringCalculator();
            expected = 12;
            result = calc.add('3\n4,5');
            expect(result).toEqual(expected);
        });

        it('should return sum given input has custom separated digits', function () {
            var result, expected, calc;
            calc = createStringCalculator();
            expected = 3;
            result = calc.add('//;\n1;2');
            expect(result).toEqual(expected);
        });

        it('should throw error given input with negative number', function () {
            var calc;
            calc = createStringCalculator();
            expect(function() {
                calc.add('1,2,-3');
            }).toThrow('Negatives not allowed : -3');

        });


    });
});