const repeatString = function(word, amount) {
    let result = ''
    for (let i = 0; i < amount; i++){
        result += word
    }

    if (amount < 0) {
        return 'ERROR'
    }
    return result

    
};

// Do not edit below this line
module.exports = repeatString;
