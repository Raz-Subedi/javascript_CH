

// Let does not let you declare a variable twice.

var catName = "QUincy";
var quote;

var catName = "Beau";

function catTalk(){
    "use strict"

    catName = "Oliver";
    quote = catName + " says Meow!";
}

catTalk();



//Compare Scopes of the var and let keywords

/*
Another major difference between the var and let keywords ie that 
-> When you declare a variable with var it id declared globally or 
   locally if declared inside the fucntion.
-> However, let the scope of let is limited to the block statement or expression that it was declared in
*/

// Example

function checkScope(){
    "use strict";
    let i = "function scope";
    if(true){
       let i = "block scope";
        console.log("Block scope i is :", i);
    }
    console.log("Function scope i is: ",i);
    return i;
}
checkScope();

// Declare a Read-Only Variable with the Const Keyword.

/*
Const is another way to declare a variable.
It has all the feature of ler but it's also readonly.
You cannot reassign const.
*/

function printManyTimes(str){
    "use strict";

  //  var sentence = str + " id cool!"; // can be changed

    const SENTENCE = str + " id cool!";
    sentence = str + " is amazing!";

    for(let i = 0; i<str.length; i+=2){
        console.log(SENTENCE);
    }
}

printManyTimes("freeCodeCamp");


// Mutate an Array Declares with Const

const s = [5,7,2]
function editInPlace(){
    "use strict"

   // s = [2,5,7];  Cannot reassign
   // can be  modified using bracket.

   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
}

editInPlace();
console.log(s);


// Prevent Object Mutation

/*
As seen previously, a const declaration alone doesn't really protect your data from mutation.
There is something called object.freeze that will prevent data mutation.
*/

function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);
