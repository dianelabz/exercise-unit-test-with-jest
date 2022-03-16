const fromDollarToYen = function(dollar) {
    let euro = dollar / 1.2;
    let yen = euro * 127.9;
    return yen;
}
const fromEuroToDollar = function(euro){
    let dollar = euro * 1.2;
    return dollar;
}
console.log("Hello World");

function sum(a, b) {
    return a + b
}
console.log(fromEuroToDollar(3.5))
console.log(sum(7, 3))

module.exports = { sum, fromDollarToYen };