const { sum } = require('./app.js');

test("suma 14+9 nos dará 23", function () {
    let total = sum(14, 9);
    expect(total).toBe(23)
})


test("1 dolar debería ser 102.3 yenes", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(6)).toBe(639.5);
})
test("1 euro debería ser 1.2 dollares", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(1)).toBe(1.2);
})
test("1 yen debería ser 102.32 pound", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(60)).toBe(48);
})
