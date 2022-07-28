// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Falsy Bouncer</h1>`;

/** TODO:
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.
 * Hint: Try converting each value to a Boolean.
 
 function bouncer(arr) {
   return arr;
 }
 
 bouncer([7, "ate", "", false, 9]);
 */

function bouncer(arr) {
  let notFalseArr = [];
  for (const a of arr) {
    if (a) {
      notFalseArr.push(a);
    }
  }
  return notFalseArr;
}

console.log(bouncer([7, 'ate', '', false, 9]));
console.log(bouncer(['a', 'b', 'c']));
console.log(bouncer([false, null, 0, NaN, undefined, '']));
console.log(bouncer([null, NaN, 1, 2, undefined]));
