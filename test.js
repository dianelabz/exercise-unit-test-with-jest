const { sum } = require('./app.js');

test("suma 14+9 nos dará 23", function () {
    let total = sum(14, 9);
    expect(total).toBe(23)
})

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar) {
    let euro = (dollar / 1.2);
    let yen = (euro * 127.9);
    return yen;
}
function fromEuroToDollar(dollar) {
    return dollar / oneEuroIs.USD
}
function fromYenToPound(Yen) {
    let euro = (Yen / 127.9);
    let pound = (euro * 0.8);
    return pound;
}
test("1 dolar debería ser 102,3 yenes", function(){
    const { fromDollarToYen } = require('./app.js')
    expect (fromDollarToYen(4.6)).toBe(470,5);
})
test("1 euro debería ser 1.2 dollares", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect (fromEuroToDollar(4.6)).toBe(5.52);
})
