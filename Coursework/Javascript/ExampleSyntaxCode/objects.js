var housekeeper1 = {
    name: "Phil",
    yearsExperience: 5,
    age: 25,
    skills: ["cleaning", "managing", "fixing"]
}


// Making multiple objects with constructor function
function housekeeper(name, yearsExperience, age, skills){
    this.name = name;
    this.yearsExperience =yearsExperience;
    this.age = age;
    this.skills = skills;
    // Creating a method
    this.clean = function (){
        console.log("Clean");
    };

}



// Creating a housekeeper
housekeeper1 = new housekeeper("Barb", 4, 25, ["Running", "Groceries", "Cleaning"]);

// Accessing Properties
housekeeper1.name;
housekeeper.clean;