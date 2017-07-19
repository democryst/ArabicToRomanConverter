function roman(arabic) {
    var arabics = [1, 4, 5, 9, 10, 40, 50, 90, 100]
    var result = "";
    var map = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C"
    }
    var size = arabics.length;
    while (arabic > 0) {
        for (let i = size - 1; i >= 0; i--) {
            if (arabic >= arabics[i]) {
                arabic -= arabics[i];
                result += map[arabics[i]];
                break;
            }
        }
    }

    return result;
}

module.exports = roman;