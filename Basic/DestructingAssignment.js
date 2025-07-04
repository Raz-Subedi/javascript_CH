

// Use Destructuring Assignment to Assign Variables from Objects
    var voxel = {x: 3.6, y: 7.4, z: 6.54};

    // var x = voxel.x; // x = 3.6
    // var y = vowel.y; // y = 7.4
    // var z = voxel.z; // z = 6.54

    const {x:a,y:b,z:c} = voxel; // this is destructing

    const AVG_TEMPERATURES = {
        today: 77.5,
        tommorow: 79,
    };

    function getTempOfTmrw(avgTemperatures){
        "use strict";

        const {tommorow:tempOfTommorow} = avgTemperatures;
        return tempOfTommorow;
    }

    console.log(getTempOfTmrw(AVG_TEMPERATURES));



// Destructuring Assignment with Nested Objects

    const LOCAL_FORECAST = {
        today:{min:72, max:83},
        tommorow: {min:73.3, max: 84.6}
    };

    function getMaxOfTmrw(forecast){
        "use strict";

        const {tommorow : {max:maxOfTommorrow}} = forecast;

        return maxOfTommorrow;
    }

    console.log(getMaxOfTmrw(LOCAL_FORECAST));


    // Use Destructuring Assignment to Assign Variables from Arrays

    const [z,x, ,y] = [1,2,3,4,5,6];
    console.log(z,x,y);


    // Using Destructuring of arrays to switch the places of variables.
    let p = 8, q = 6;
    (() => {
        "use strict";
        [p,q] =[q,p]
    })();
    console.log(p);
    console.log(q);

// Use Destructuring Assignment with the Rest Operator
   //-> We can use destructuring assignment with the rest operator to reassign array elements.

    const source = [1,2,3,4,5,6,7,8,9,10];

    function removeFirstTwo(list){

        const [ , , ...arr] = list;
        return arr;
    }

    const arr = removeFirstTwo(source);
    console.log(arr);
    console.log(source);


// Use Destructuring Assignment to Pass an Object as a Function's Parameters

    const stats = {
        max: 56.78,
        standard_deviation: 4.34,
        median: 34.54,
        mode: 23.87,
        min: -0.75,
        average: 35.85
    };

    const half = (function() {

        return function half({max,min}){
            return (max + min)/2.0;
        };

    })();

    console.log(stats);
    console.log(half(stats));
