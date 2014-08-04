module("test usage of array functions:");

test("sort array by length of elements", function () {
    var arr = ["*", "***", "**"];
    arr = arr.sort(function (first, second) {
        return second.length - first.length;
    });

    equal(arr[0], "***");
    equal(arr[1], "**");
    equal(arr[2], "*");
});

test("split returns array", function () {
    var s = "1,2,3";
    var arr = s.split(",");

    equal(arr[0], "1");
    equal(arr[1], "2");
    equal(arr[2], "3");
});

test("array.every when at least one element is less than 0 should return false", function () {
    var arr = [1, 2, -1, 3];

    var result = arr.every(function (el) {
        return el >= 0;
    });

    ok(result===false);
});

test("array.some when at least one element is lesss than 0 should return true", function () {

    var arr = [0, 1, 2, -1, 3];

    var result = arr.some(function (el) {
        return el < 0;        
    });

    ok(result);
});


test("array.every when no elements are less than 0 should return true", function () {
    var arr = [0, 1, 2, 3];

    var result = arr.every(function (el) {
        return el >= 0;
    });

    ok(result);
});

test("array.reduce to sum elements of array", function () {
    var arr = [1, 2, 3, 4];
    var result = arr.reduce(function (prev, curr) {
        return prev + curr;
    });

    equal(result, 10);
});

