// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Game changing with Maps</h1>`;

//A New Map uses an array of arrays
const userMap = new Map([
  [1, { name: 'Eugenio' }],
  [2, { name: 'Daniela' }],
]);

// userMap.set({ userId: 1 }, { name: 'John' });

console.log(userMap);

let myMap = new Map([
  [1, 'one'], // [key, value]
  [2, 'two'],
  [3, 'three'],
]); // from MDN

console.log(myMap);

// Below is not the best way of using MAP, for example:
// const USER_MAP = {
//   1: { name: 'Eugenio' },
//   2: { name: 'Daniela' },
// };
// console.log(USER_MAP[1]);

// Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map