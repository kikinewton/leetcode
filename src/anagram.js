//a function to check if two words are anagrams, this function has a linear time complexity

function validAnagram(word1 = '', word2 = ''){
    //the length of the two words must be the same
    if(word1.length !== word2.length){
        return false;
    }
    //split the word1 and word2 into an array
    const word1Array = word1.split('');
    const word2Array = word2.split('');
    //reverse word1 and compare with word2
    word1Array.reverse()
    //if they are the same then return true
    for (let index = word1Array.length - 1; index > -1; index--) {
        if (word1Array[index] === word2Array[index]) {
            word1Array.pop();
        }
    }
    //if word1Array is empty then return true;
    if (word1Array.length === 0) {
        return true;
    } 
    return false;
}

console.log(validAnagram('rat', 'art'));