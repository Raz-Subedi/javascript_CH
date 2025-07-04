

    // Use Arrow Functions to Write concise Anonymous Functions

    var magic = function(){
        return new Date();
    };

    // The above can be written as 

        var magic = () => {
        return new Date();
    };

    // But we can shorten this even more.
    // If we're just returning one value here we don't even need the return keyword.
    // And we don't need the curly braces.
    
   // var magic = () => new Date();
    const magic = () => new Date();



// Arrow Functions with Parameters

    // Converting this to arrow function
    var myConcat = function(arr1, arr2){
        return arr1.concat(arr2);
    };

    // rmoved function and added arrow
        var myConcat = (arr1, arr2) => {
        return arr1.concat(arr2);
    };


    // removed bracket and return keyword and add const for var.
        const myConcat = (arr1, arr2) => arr1.concat(arr2);
    
    console.log(myConcat([1,2],[3,4,5]));
