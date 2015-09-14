//warrior project!

function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor((Math.random()*100) + 1) 
    this.fight = function() {
        return "Rushes to the arena with " + this.weapon;
    };
    this.faceoff = function(opponent) {
        if (this.power > opponent.power) {
            return this.name + " has sucessfully slain " + opponent.name + "!!!!";
        }
        if (this.power < opponent.power) {
            return this.name + " has suffered a bloody defeat";
        }
        if (this.power === opponent.power) {
            return this.name + " and" + opponent.name + "decide to stop fighting and grab a beer.";
        }
    }
    
}

var Kayla = new Warrior("Kayla", "female");
var Dave = new Warrior("Dave", "male");
var Beijo = new Warrior("Beijo", "male");
var Boots = new Warrior("Boots", "male");

console.log("Kayla's Power: " + Kayla.power);
console.log("Boots' Power: " + Boots.power);
console.log("Dave's Power: " + Dave.power);
console.log("Beijo's Power: " + Beijo.power);


console.log(Kayla.fight());

console.log(Kayla.faceoff(Boots));
console.log(Dave.faceoff(Beijo));
console.log(Dave.faceoff(Kayla));
console.log(Boots.faceoff(Beijo));