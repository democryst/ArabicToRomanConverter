const fizzbuzz = require("../src/fizzbuzz.js");

// test('Given 1 should return 1', () =>{
//     answer = fizzbuzz(1);

//     expect(answer).toBe("1");
// });

// test('Given 2 should return 2', () =>{
//     answer = fizzbuzz(2);

//     expect(answer).toBe("2");
// });

let testCases = [
    { given: 1, expected: "1" },
    { given: 2, expected: "2" },
    { given: 3, expected: "Fizz" },
    { given: 5, expected: "Buzz" },
    { given: 6, expected: "Fizz" },
    { given: 15, expected: "FizzBuzz" },
    { given: 99, expected: "Fizz" },
    { given: 100, expected: "Buzz" }
]

// for(i = 1; i <100; i++){
//     testCases.push({given: i, expected: i.toString()})
// }

testCases.forEach((testCases) => {
    test('Given' + testCases.given + ' should return ' + testCases.expected, () => {
        expect(fizzbuzz(testCases.given)).toBe(testCases.expected);
    })
});