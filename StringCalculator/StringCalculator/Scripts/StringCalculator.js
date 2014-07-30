var stringCalculator = function () {
    this._attribute = "hello";
};
stringCalculator.prototype = {
    add: function (numbers) {
        if (numbers==="")
            return 0;
        return Number(numbers);
    },

};
