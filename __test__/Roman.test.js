const roman = require("../src/Roman.js");

let testcases = [
    {given: 1, exp: "I"},
    {given: 2, exp: "II"},
    {given: 3, exp: "III"},
    {given: 4, exp: "IV"},
    {given: 5, exp: "V"},
    {given: 6, exp: "VI"},
    {given: 7, exp: "VII"},
    {given: 8, exp: "VIII"},
    {given: 9, exp: "IX"},
    {given: 10, exp: "X"},
    {given: 11, exp: "XI"},
    {given: 12, exp: "XII"},
    {given: 14, exp: "XIV"},
    {given: 15, exp: "XV"},
    {given: 20, exp: "XX"},
    {given: 40, exp: "XL"},
    {given: 50, exp: "L"},
    {given: 60, exp: "LX"},
    {given: 90, exp: "XC"},
    {given: 91, exp: "XCI"},
    {given: 100, exp: "C"},
];
testcases.forEach((testcase)=>{
    test("given "+testcase.given+" should return "+testcase.exp,()=>{
     let result = roman(testcase.given)
     expect(result).toBe(testcase.exp)
    })
})

