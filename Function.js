
    /*
    Function in JAvascript.
    -> Fuction allow us to create resuable code in Javascript.
    */

   // Example
   function ourReusableFunction(){
    console.log("Heyyyy", "World");
   }

   ourReusableFunction();
   ourReusableFunction();
   ourReusableFunction();

    // Passing Values to Functions with Arguments
    /*
    Parameters are the variables that act as place holders for the values
    that are to be input to a function when it is called.
    */

    function ourFunctionWithArgs(a,b){
        console.log(a-b);
    }

    ourFunctionWithArgs(10,5);
