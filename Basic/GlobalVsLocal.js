

/* 
It is possible to have both local and global varibles with the same name.
-> When you do this, the local variabe takes precedent over the global variable.
*/ 

var outerWear = "T-shirt";
function myOutfit(){

    var outerWear = "Sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

