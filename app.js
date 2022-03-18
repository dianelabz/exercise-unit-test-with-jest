let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
console.log("Hello World");

function sum(a, b) {
    return a + b
}
console.log(fromEuroToDollar(3.5))
console.log(sum(7, 3))

function fromDollarToYen(dollar) {
    let euro = (dollar / 1.2);
    let yen = (euro * 127.9);
    return yen;
}
function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD
}
function fromYenToPound(Yen) {
    let euro = (Yen / 127.9);
    let pound = (euro * 0.8);
    return pound;
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };