## SOLUTIONS

### Alternate Solution 1
```js
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i])
      newArray.push(arr[i]);
  }
  return newArray;
}
```
### Code Explanation
- We create a new empty array.
- We use a `for` cycle to iterate over all elements of the provided array (`arr`).
- We use the `if` statement to check if the current element is [truth](http://forum.freecodecamp.com/t/javascript-truthy-value/15975) or [fals](https://guide.freecodecamp.org/javascript/falsy-values/).
- If the element is truthy, we push it to the new array (`newArray`).  This result in the new array (`newArray`) containing only truthy elements.
- We return the new array (`newArray`).

### REFERENCE LINKS
- [Boolean](https://forum.freecodecamp.com/t/javascript-boolean/14311)
- [Truthy value](https://forum.freecodecamp.com/t/javascript-truthy-value/15975)
- [Falsey values](http://forum.freecodecamp.org/t/javascript-falsy-values/14664)
- [`Array.prototype.push`](http://forum.freecodecamp.org/t/javascript-array-prototype-push/14298)


### Alternate Solution 2
```js
function bouncer(arr) {
  return arr.filter(Boolean);
}
```
### Code Explanation
- The `Array.prototype.filter` method expects a function that returns a `Boolean` value which takes a single argument and returns `true` for [truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975) value or `false` for [falsey](https://guide.freecodecamp.org/javascript/falsy-values/) value.  Hence we pass the built-in `Boolean` function.

### REFERENCE LINKS
- [Boolean](http://forum.freecodecamp.com/t/javascript-boolean/14311)
- [Truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
- [`Array.prototype.filter()`](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

