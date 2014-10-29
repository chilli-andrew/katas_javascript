/* global describe, it, expect, createStringCalculator */
describe('stringCalculator', function () {
    describe('add', function() {
        it('should return 0 given empty string', function() {
            // arrange
            var input = '';
            var expected = 0;

            var calc = createStringCalculator();
            // act
            var result = calc.add(input);
            // assert
            expect(result).toEqual(expected);
        });

        it('should return single digit number given single digit string', function() {
            // arrange
            var input = '1';
            var expected = 1;

            var calc = createStringCalculator();
            // act
            var result = calc.add(input);
            // assert
            expect(result).toEqual(expected);
        });

        it('should return multiple digit number given multiple digit string', function() {
            // arrange
            var input = '12';
            var expected = 12;

            var calc = createStringCalculator();
            // act
            var result = calc.add(input);
            // assert
            expect(result).toEqual(expected);
        });

        it('should return sum given two comma separated digits', function() {
            // arrange
            var input = '1,2';
            var expected = 3;

            var calc = createStringCalculator();
            // act
            var result = calc.add(input);
            // assert
            expect(result).toEqual(expected);
        });

        it('should return sum given many comma separated digits', function() {
            // arrange
            var input = '1,2,3';
            var expected = 6;

            var calc = createStringCalculator();
            // act
            var result = calc.add(input);
            // assert
            expect(result).toEqual(expected);
        });

        it('should return sum given new line separated digits', function() {
            // arrange
            var input = '3\n5';
            var expected = 8;

            var calc = createStringCalculator();
            // act
            var result = calc.add(input);
            // assert
            expect(result).toEqual(expected);
        });

        it('should return sum given new line separated digits', function() {
            // arrange
            var input = '3\n5';
            var expected = 8;

            var calc = createStringCalculator();
            // act
            var result = calc.add(input);
            // assert
            expect(result).toEqual(expected);
        });

        it('should throw with message given single negative in delimiter separated input', function() {
            // arrange
            var input = '3,-5\n7';

            var calc = createStringCalculator();
            // act
            expect(function() {
                calc.add(input);
            }).toThrow('negatives not allowed: -5');
            // assert
        });

    });

});
