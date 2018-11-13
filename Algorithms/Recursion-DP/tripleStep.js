// You can walk up a staircase by taking 1, 2, or 3 steps at a time. Write a method to count how many possible ways you can walk up the steps

// recursion
const tripleStep = n => {
    if (n == 1 || n == 0) return 1;
    if (n == 2) return 2;

    return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
}

// dynamic programming
const tripleStep = n => {
    let memo = [];
    memo[0] = 1;
    memo[1] = 1;
    memo[2] = 2;

    for (let i=3; i<n.length; i++) {
        memo[i] = memo[i-1] + memo[i-2] + memo[i-3];
    }

    return memo[n-1] + memo[n-2] + memo[n-3];

}

console.log(tripleStep(0)); // 0
console.log(tripleStep(1)); // 1
console.log(tripleStep(2)); // 2
console.log(tripleStep(3)); // 4

console.log(tripleStep(4)); // 7
console.log(tripleStep(5)); // 13