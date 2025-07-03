

    // Use class syntax to define a constructor function

    //ES6 provides a syntax to create objects using the class keyword.

    // var SpaceShuttle = function(targetPlanet){
    //     this.targetPlanet = targetPlanet;
    // }
    // var zeus = new SpaceShuttle('Jupiter'); // This is the old way of creating objects with new keyword.

    // console.log(zeus.targetPlanet);




    // The class syntax replaces  the constructor function creation.
    class SpaceShuttle{
       constructor (targetPlanet){
            this.targetPlanet = targetPlanet;
        }
    }

    var zeus = new SpaceShuttle('Jupiter'); // This is the old way of creating objects with new keyword.
    console.log(zeus.targetPlanet);


    // Another Example

    function makeClass(){
        class Vegetable{
            constructor(name){
                this.name = name;
            }
        }
        return Vegetable;
    }
    const Vegetable = makeClass();
    const carrot = new Vegetable("Carrot");
    console.log(carrot.name);
    
