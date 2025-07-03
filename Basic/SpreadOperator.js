

// Use Spread Operator to Evaluate Arrays In-Place.

// The spread operator looks just like the rest operator three dots.
// But it expands an already existing array. Or it spreads out an array
// So, it takes an array and spreads it out into its individual parts.

const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function(){
    arr2 = [...arr1];   // change this line
    arr1[0] = 'potato'
})();

console.log(arr2);


// The spread operator is very useful for:

// Cloning arrays/objects

// Combining arrays/objects

// Passing arguments to functions

