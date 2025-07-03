
    
    // Accessing using dot

    var testObj = {
        "hat":"ballcap",
        "shirt": "jersey",
        "shoes": "cleats"
    };

    var hatvalue = testObj.hat;
    var shirtValue = testObj.shirt;


    // Accessing Object Properties with Bracket Notation
    var testObj2 = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
    };

    // You can use bracket notation anytime but it is required of the name has a space in it.

    var entreeValue = testObj2["an entree"];
    var drinkValue = testObj2['my side'];


    //Accessing Object Properties with Variables
    var testobj3 = {
        12: "Namath",
        16: "Montana",
        19: "Unitas"
    };

    var playerNumber = 16;
    var player = testobj3[playerNumber];

    // Updating Object Properties
    var test = {
        "name": "Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["feeCodeCamp Campers"]
    };

    test.name = "Happy Coder";
    console.log(test.name);


    // Add new Properties to an Object
    // -> You can add new properties to an object using dot notations or brackets notation.
    test.bark= "Bow bow";

    test['nose'] = 1;

    // Delete properties from an Object
    var del = {
        "name": "Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["feeCodeCamp Campers"],
        "bark": "bow woof"
    };

    delete del.bark;
