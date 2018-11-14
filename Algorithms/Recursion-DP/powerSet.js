// Write a method to return all subsets of a set

// Recursion
const subSetHelper = (set, subsets, numElements) => {
    if (numElements === 0) {
        subsets.push(new Set());
        return;
    }

    else if (subsets.length === 0) {
        let element = Array.from(set)[numElements - 1];
        let newSet = new Set();
        newSet.add(element);
        subsets.push(newSet);

        subSetHelper(set, subsets, numElements - 1);
    }

    else {
        let element = Array.from(set)[numElements - 1];

        subsets.forEach(set => {

            let newSet = new Set(set);
            newSet.add(element);
            subsets.push(newSet);


        });

        let newSet2 = new Set();
        newSet2.add(element);
        subsets.push(newSet2);

        subSetHelper(set, subsets, numElements - 1);
    }
}

const subSet = set => {
    let subsets = [];
    subSetHelper(set, subsets, set.size);

    return subsets;
}

let test = new Set([1, 2, 3]);

console.log(subSet(test));


// DP



let test = new Set([1, 2, 3]);

console.log(subSet(test));
