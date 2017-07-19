function roman(arabic) {
    var result = "I";
    var arabics= [1,5,10,50,100]
    var romans= ["I","V","X","L","C"]
    arabics.forEach(function(item,index){
        if(arabic === item)
            result = romans[index];

    })
    return result;
}

module.exports = roman;