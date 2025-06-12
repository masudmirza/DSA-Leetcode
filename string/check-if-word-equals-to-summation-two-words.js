/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let word1 = '';
    let word2 = '';
    let word3 = '';

    // Convert firstWord to its corresponding numerical string
    for (const char of firstWord) {        
        word1 += (char.charCodeAt(0) - 'a'.charCodeAt(0));
    }

    // Convert secondWord to its corresponding numerical string
    for (const char of secondWord) {        
        word2 += (char.charCodeAt(0) - 'a'.charCodeAt(0));
    }

    // Convert targetWord to its corresponding numerical string
    for (const char of targetWord) {        
        word3 += (char.charCodeAt(0) - 'a'.charCodeAt(0));
    }

    // Compare if sum of firstWord and secondWord equals targetWord
    return Number(word1) + Number(word2) === Number(word3);
};

const firstWord = 'acb';
const secondWord = 'cba';
const targetWord = 'cdb';

console.log(isSumEqual(firstWord, secondWord, targetWord));


// more DRY version
var isSumEqual2 = function(firstWord, secondWord, targetWord) {
    const convert = (word) => {
        return Number([...word].map(char => char.charCodeAt(0) - 'a'.charCodeAt(0)).join(''));
    };

    return convert(firstWord) + convert(secondWord) === convert(targetWord);
};
