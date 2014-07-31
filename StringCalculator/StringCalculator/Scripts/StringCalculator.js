var stringCalculator = function() {
};

stringCalculator.prototype = {
    add: function (input) {
        if (input === "") {
            return 0;
        }
        var calc = input.replace(/,/g, "+");
        return eval(calc);
    }
}