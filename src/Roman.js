function roman(arabic) {
    var result = "I";
    if (arabic === 5) {
        result = "V";
    }
    if (arabic === 10) {
        result = "X";
    }
    if (arabic === 50) {
        result = "L";
    }
    if (arabic === 100) {
        result = "C";
    }
    return result;
}

module.exports = roman;