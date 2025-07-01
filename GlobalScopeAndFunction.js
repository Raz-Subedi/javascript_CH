
// Declare your variable here
/*
Variables which are defined outside of a function block have golbal scope.
*/

var myGlobal = 10;


function fun1(){
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;

   // If the var keyword was here it would be accessed with in this function.
   // however it is not in var keyword 
   // It automatically becomes global variable and can be used where ever.
}


// Only change code above this line
function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
