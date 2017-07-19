const roman = require("../src/Roman.js");
test("given 1 should return I", function(){
    let result = roman(1);
    expect(result).toBe("I");
})

xtest("given 2 should return II", function(){
    let result = roman(2);
    expect(result).toBe("II");
})

test("given 4 should return IV", function(){
    let result = roman(4);
    expect(result).toBe("IV");
})

test("given 5 should return V", function(){
    let result = roman(5);
    expect(result).toBe("V");
})

test("given 9 should return IX", function(){
    let result = roman(9);
    expect(result).toBe("IX");
})

test("given 10 should return X",()=>{
    let result = roman(10)
    expect(result).toBe("X")
})

test("given 40 should return XL",()=>{
    let result = roman(40)
    expect(result).toBe("XL")
})

test("given 50 should return L",()=>{
    let result = roman(50)
    expect(result).toBe("L")
})

test("given 90 should return XC",()=>{
    let result = roman(90)
    expect(result).toBe("XC")
})

test("given 100 should return C",()=>{
    let result = roman(100)
    expect(result).toBe("C")
})

