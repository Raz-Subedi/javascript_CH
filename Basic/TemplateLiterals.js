

/*
     Create Strings using Template Literals
     -> Template Literals are a special type of string that makes creating complex strings easier.
     -> You make them with backtick
     Advantagees of using quotation marks are;-
     1) You can make multiline Strings.
     2) You can add single or double quotation marks right in the string
     3) You can put variables right in the string.
            ${person.name}
    */

   const person = {
    name: "Zodiac Hasbro",
    age: 56
   };


   // Template literal with multi-line and string interpolations
   const greeting = `Hello, my name is ${person.name}!
   I am ${person.age} years old.`;

   console.log(greeting);



// Practice // Challenge

   const result = {
    success: ["max-length","no-amd","prefer-arrow-functions"],
    failure: ["no-var","var-on-top","linebreak"],
    skipped: ["id-blacklist","no-dup-keys"]
   };

   function makeList(arr){
    const resultDisplayArray = [];

    for(let i =0; i<arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
   }

   const resultDisplayArray = makeList(result.failure);
   console.log(resultDisplayArray);

