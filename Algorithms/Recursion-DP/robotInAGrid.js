// Imagine a robot sitting on the upper left corner of grid with r rows and c columns, and the robot can only move right and down, and some cells are "off limits". Describe an algorithm to find a path for the robot from top left to bottom right.

//param: [[]] - array of arrays
//result: [] - array of coordinates

// Recursion
// const finalCoord = (arr, coords) => {
//     if (coords[0] === arr.length - 1 && coords[1] === arr[0].length - 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const validCoord = (arr, coords) => {
//     // console.log(arr, coords);
//     if (arr[coords[0]][coords[1]] === "x") {
//         return false;
//     } else {
//         return true;
//     }
// }

// const inBounds = (arr, coords) => {
//     // console.log("1:", arr.length - 1, "0:", arr[0].length-1, "coords", coords );
//     if ((coords[0] > arr.length - 1) || (coords[1] > arr[0].length - 1)) {
//         return false;
//     } else {
//         return true;
//     }
// }

const getPath = (arr, coords, path) => {
    if ((coords[0]) > arr.length -1 || (coords[1] > arr[0].length -1) || arr[coords[0]][coords[1]] === "x") return false;

    let finalCoords = ((coords[0] === arr.length-1) && (coords[1] === arr[0].length-1));

    if (finalCoords || getPath(arr, [coords[0] + 1, coords[1]], path) || getPath(arr, [coords[0], coords[1] + 1])) {
        let coords = [coords[0], coords[1]];
        path.push(coords);
        return true;
    }

    return false;
}

const findPath = (arr, coords) => {
    if (arr === null || arr.length === 0) return null;
    let path = [];

    if (getPath(arr, coords, path)) {
        return path.reverse();
    }

    return null
}

// DP

let board = [
    ["o", "o", "o", "x"],
    ["o", "x", "o", "x"],
    ["o", "x", "o", "o"]
];

let start = [0, 0];

console.log(findPath(board, start));
