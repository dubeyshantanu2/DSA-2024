const colors = ["red", "yellow", "blue"];
// Array methods and empty slots
colors[5] = "purple";
// console.log(colors); // ["red", "yellow", "blue", empty × 2, "purple"]
//By specifying an index to a value in an array. The array will place the item at that index and index whiich are
//skipped will be empty.
//[ 'red', 'yellow', 'blue', <2 empty items>, 'purple' ]
colors.forEach((item, index) => {
  //   console.log(`${index}: ${item}`);
});
// for each works like map function in JS. It will iterate over each element in the array and return the index and the value of the element.
colors.reverse();
// console.log(colors); // [ 'purple', <2 empty items>, 'blue', 'yellow', 'red' ]
console.log(
  "some function in arrays",
  colors.some((item) => item === "blue")
);
