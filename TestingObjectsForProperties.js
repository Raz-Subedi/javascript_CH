

// Testing Objects for Properties
// -> We can check if an object has a property with the hasown property method.

    var myObj = {
        gift: "pony",
        pet: "kitten",
        bed: "sleigh"
    };

    function checkObj(checkProp){
        if(myObj.hasOwnProperty(checkProp)){
            return myObj[checkProp];
        }else{
            return "Not Found"
        }
    }

    console.log(checkObj("ift"));
    