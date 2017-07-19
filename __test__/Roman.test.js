const roman = require("../src/Roman.js");
test("given 1 should return I", function(){
    let result = roman(1);
    expect(result).toBe("I");
})

test("given 5 should return V", function(){
    let result = roman(5);
    expect(result).toBe("V");
})

test("given 10 should return X",()=>{
    let result = roman(10)
    expect(result).toBe("X")
})

test("given 50 should return L",()=>{
    let result = roman(50)
    expect(result).toBe("L")
})

test("given 100 should return C",()=>{
    let result = roman(100)
    expect(result).toBe("C")
})

