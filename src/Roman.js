function roman(arabic) {
    var result = "I";
    // var arabics= [1,2,5,10,50,100]
    var arabics= [1,4,5,9,10,40,50,90,100]
    // var romans= ["I","II","V","X","L","C"]
    var romans= ["I","IV","V","IX","X","XL","L","XC","C"]
    
    arabics.forEach(function(item,index){
        if(arabic === item)
            result = romans[index];
    })
    return result;
}

module.exports = roman;