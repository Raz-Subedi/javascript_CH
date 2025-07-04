

// == 

function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

// Comparison with the Strict Equality Operator
// ===   Strict Equlaity Operator.

/*
DIFFERENCE
-> The double equals sign attempts to convert both values being compared to a common type
-> While the strict equality operator does  not do the type connversion

3 === 3    true
3 === '3'  false

-> Both of this would be true if we were using the double equlas sign ==
-> Because the string would be converted to a number and it would be equal true.
-> But with === it does not get convertes to a number so it would be evaluated to false

*/
