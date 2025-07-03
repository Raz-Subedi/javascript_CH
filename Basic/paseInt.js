


// Example of parseInt
    function convertToInteger(str){
        return parseInt(str);
    }

    convertToInteger("56");



    // Use of parseInt FUnction with a Radix
    // The radix specifies the base of the number in the string
    // such as base 2 or base 7 or base 8
    // base 2 is we know
    // base 10 is default 

    function convertToInteger1(str){
        return parseInt(str,2);
    }
   console.log(convertToInteger1("10011"));

