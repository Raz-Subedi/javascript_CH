
    // Storing multiple values in an Array
    var ourArray = ["John",23];

        var data1 = ourArray[0];
    console.log(data1);


    // Multi Dimensional Array
    var ourArray = [["the universe",42],["everything",1010]];

    // Accessing the array data
    var data1 = ourArray[0];
    console.log(data1);

    // Modifying data in an array
     var myArray = ["Hello","Ma",100,25.36]
     myArray[1]="Great";
     console.log(myArray);
    

    // Access the Multi-dimensional array
    var myArray = [[1,2,3],[4,5,6],[7,8,9], [[10,11,12],13,14]];

    var myData = myArray[2][1];
    /*
    Here the first brackert in the mydata
    [0] represents the arrray [1,2,3] [4,5,6] [7,8,9]
    the second bracket represents
    [0] the element inside those araay like 1 or 2 or 3 
    */
   console.log(myData);


   /*
   Push FUNCTION IN AN ARRAY
   -> We can append the data to the end of an array with push()
   */

    var testPush = ["Hey","How","Are"];
    testPush.push("You");
    console.log(testPush);

    var testPush2 = [["John",23],["cat",2]]
    testPush2.push(["dog",3]);
    console.log(testPush2);

    /*
    Pop FUNCTION IN AN ARRAY
    -> Use to remove an item in an array.
    */

   var testPop = [1,2,3];
   var removedItem = testPop.pop();
   console.log(removedItem);
   console.log(testPop);

   var testPop2 = [["John",23],["cat",21]];
   var removedItem2 = testPop2.pop()
   console.log(removedItem2);
   console.log(testPop2);

   /* 
   Shift FUNCTION IN ARRAY
   -> Similar to pop function 
   -> Except it removes the first element of the array instead of
   the final element.
   */

   var testShift = [["John",23],["cat",21]];
   var removedItem2 = testShift.shift();
   console.log(removedItem2);
   console.log(testShift);

   /*
   Unshift FUNCTION IN ARRAY
   -> Simalar to push function
   -> Except it add the first element of the array insted of the 
   last element.
   */

    var testUnshift = [1,2,3];
   testUnshift.unshift("IamUnshift");
   console.log(testUnshift);

