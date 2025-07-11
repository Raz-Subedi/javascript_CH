

    // Use getter and setters to Control Access to an Object

    // with the class object you often want to obtain values from the object
    // and set a value of a property within an object.
    // This are often called getters and setters.

    // _name: not private, just a convention.

    // #name: truly private, enforced by JavaScript.

// class Book{
//     constructor(author){
//         this._author = author;
//     }
//     //getter
//     get writer(){
//         return this._author;
//     }
//     //setter
//     set writer(updatedAuthor){
//         this._author = updatedAuthor;
//     }
// }




function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp-32);
        }

        get temperature(){
            return this._temp;
        }

        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
