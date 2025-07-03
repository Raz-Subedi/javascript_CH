

    // The rest operator allows you to create a function that takes a variable number of arguments.
    // ... is the rest operator 
    // it convert the incoming argument in the array args.
    const sum = (function() {
        return function sum(...args){
         //   const args = [x,y,z];
            return args.reduce((a,b) => a+b, 0);
        };
    })();
    console.log(sum(1,2,3));
