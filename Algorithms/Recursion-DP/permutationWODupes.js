// Write a method to compute all permutations of a string of unqie charactesr

// Recursion
const findPermutations = str => {
    let results = [];

    if (str.length === 1) {
        results.push(str);
        return results;
    }

    for (let i=0; i<str.length; i++) {
        let firstChar = str[i];
        let lastChars = str.substring(0,i) + str.substring(i+1);
        let nextPermutations = findPermutations(lastChars);

        for (let j=0; j<nextPermutations.length; j++) {
            results.push(firstChar+nextPermutations[j])
        }
    }
   
    return results;
}