
/*
Variables which are declared within a function as well as the functional parameters have local scope.
-> That means they are only visible from with in the function.

*/


    function myLocalScope(){
        var myVar = 5;
        console.log(myVar);
    }

    myLocalScope();

    console.log(myVar);
