// A magic index in an array  A[0..n-1] is defined to be an index such that A[i] = i. Given an array of sorted distinct integers, write a methid to find a magic index, if one exists.

// Brute Force - iterate through each index - O(n)

const findMagic = (arr, i) => {
    if (i > arr.length-1) return -1;
    if (i === arr[i]) return i;

    return findMagic(arr, i+1);
}


// Binary Search - Recursion - O(log n)

const findMagic = (arr, i) => {

}

let arr1 = [0];
let arr2 = [1, 2];
let arr3 = [1, 2, 3, 5, 6, 7];

console.log(findMagic(arr1, 0));
console.log(findMagic(arr2, 0));
console.log(findMagic(arr3, 0));