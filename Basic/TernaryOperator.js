
// Ternary Operator

// condition ? statement-if-true : statement-if-false;
    function checkEqual(a,b){
        // if(a === b){
        //     return true;
        // }
        // else{
        //     return false;
        // }

        return a===b ? true:false;
    }
    checkEqual(1,2);




    // Multiple Ternary Operators

    function checkSign(num){
        return num>0 ? "positive" : num<0 ? "negative" : "zero";
    }

    checkSign(10);
