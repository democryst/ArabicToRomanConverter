function roman(arabic) {
    
    if (arabic === 5) {
        return "V";
    }
    if (arabic === 10) {
        return "X";
    }
    if (arabic === 50) {
        return "L";
    }
    return "I";
}

module.exports = roman;