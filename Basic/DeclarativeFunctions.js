

// Write concise declarative functions

// An object can contain a function
    const bicycle ={
        gear:2,
        // setGear: function(newGear){
        //     "use strict";
        //     this.gear = newGear;
        // }
        // This is the long way to put a function within an object.


        // Instead we can do as follow
        setGear(newGear){
            "use strict";
            this.gear = newGear;
        }
    };

    bicycle.setGear(3);
    console.log(bicycle.gear);