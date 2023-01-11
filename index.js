var _a, _b;
var arrayOfNum = [];
(_a = document.getElementById("addNum")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var input = document.getElementById('add');
    var value = input === null || input === void 0 ? void 0 : input.value;
    arrayOfNum.push(Number(value));
});
(_b = document.getElementById("submit")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    console.log(sortList(arrayOfNum));
});
function getAverage(array) {
    var sum = 0;
    array.forEach(function (element) {
        sum += Number(element);
    });
    return sum / array.length;
}
function getAmountOfPositive(array) {
    var positiveNumbers = 0;
    array.forEach(function (element) {
        if (Number(element) > 0) {
            positiveNumbers++;
        }
    });
    return positiveNumbers;
}
function sortList(array) {
    return array.sort();
}
