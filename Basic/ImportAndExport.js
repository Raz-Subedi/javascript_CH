

/*
    Understand the differences betweeen import and require
    In the past people would use the require function to import functions and code from other files.
    But now we have import and export
    You can export code in one file and then import it in another file.
    It also allows you to only import certain functions from a file or certain variables.
*/

import {capitalizeString} from "./String_function.js"
    const cap = capitalizeString("hello!");
    console.log(cap);

    // </script>
