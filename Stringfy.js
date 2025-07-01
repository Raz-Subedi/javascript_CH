

    function nextInLine(arr, item){

        arr.push(item); // push add element inlast.
        return arr.shift(); // remove element from the first.
    }

    var testArr = [1,2,3,4,5,6];

    console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLine(testArr,6));
    console.log("After: " + JSON.stringify(testArr));

    //JSON.stringify() is a built-in JavaScript method that converts a JavaScript object or value into a JSON string.
