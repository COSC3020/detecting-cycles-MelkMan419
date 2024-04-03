//had to look at classmates test files to see how mine should look
const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

let A = [
    [1],
    [0]
];
let B = [
    [1],
    [2],
    [3],
    [4],
    [0]
];
let pentagon = [
    [1],
    [2],
    [3],
    [4],
    [0]
];
let star = [
    [2],
    [3],
    [4],
    [0],
    [1]
];
let hourglass = [
    [2],
    [0],
    [3],
    [1]
];
let cyclicGraph = [
    [1],
    [2],
    [0]
];
let cyclicGraph2 = [
    [1],
    [2],
    [3],
    [0]
];

if (!hasCycle(A)) throw new Error('Failed to detect cycle in A');
if (!hasCycle(B)) throw new Error('Failed to detect cycle in B');
if (!hasCycle(pentagon)) throw new Error('Failed to detect cycle in pentagon');
if (!hasCycle(star)) throw new Error('Failed to detect cycle in star');
if (!hasCycle(hourglass)) throw new Error('Failed to detect cycle in hourglass');
if (!hasCycle(cyclicGraph)) throw new Error('Failed to detect cycle in cyclicGraph');
if (!hasCycle(cyclicGraph2)) throw new Error('Failed to detect cycle in cyclicGraph2');

let G = [
    [1,3,5],
    [2,4],
    [3,7],
    [6],
    [5,7],
    [6],
    [7],
    []
];
let empty = [];
let line = [
    [1],
    [2],
    [3],
    []
];
let triangle = [
    [1,2],
    [2],
    []
];
let tree = [
    [1,2],
    [3,4],
    [5,6],
    [7,8],
    [9,10],
    [11,12],
    [13,14],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
if (hasCycle(G)) throw new Error('Detected false cycle in G');
if (hasCycle(empty)) throw new Error('Detected false cycle in empty');
if (hasCycle(line)) throw new Error('Detected false cycle in line');
if (hasCycle(triangle)) throw new Error('Detected false cycle in triangle');
if (hasCycle(tree)) throw new Error('Detected false cycle in tree');

console.log('All tests passed successfully!');
