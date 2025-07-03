

    function phoneticLookup(val){
        var result = "";

        var lookup = {
            "alpha": "Adams",
            "bravo": "Boston",
            "charlie": "Chicago",
            "delta": "Denver",
            "echo": "Easy",
            "foxtrot":"frank"
        };

        result = lookup[val];
        return result;
    }

    console.log(phoneticLookup("echo"));


    // The switch is converted to object for look up values.


        // switch(val){
        //     case "alpha":
        //         result = "Adams";
        //         break;
        //     case "bravo":
        //         result = "Boston";
        //         break;
        //     case "charlie":
        //         result = "Chicago";
        //     case "delta":
        //         result = "Denver";
        //         break;
        //     case "echo":
        //         result = "Easy";
        //         break;
        //     case "foxroot":
        //         result = "Frank";
        //         break;
        // }

