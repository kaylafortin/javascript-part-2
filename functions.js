/*This is a function that sorts based on the string length
I saved the test strings as variables just to make the code
look a bit neater. I understand that I could have just put them
directly in elements in the array.*/
/*An updated more generic basicSort function*/

var testArray = [2, 5, 8, 9, 10, 2, 0]

function basicSort(value1, value2 , propArray) {
        var propertyArray = []
    for(var j = 2; j < arguments.length; j++) {
        propertyArray.push(arguments[j]);
    }
    for (var i=0; i < propertyArray.length; i++) {
        value1 = value1[propertyArray[i]];
        value2 = value2[propertyArray[i]];
    }
    if (value1 > value2) {
        return 1;
    }
    if (value2 > value1) {
        return -1;
    }
    return 0;
}


var name1 = {
    name: "Tim",
    age: 22,
}

var name2 = {
    name: "Kayla",
    age: 55,
}
var name3 = {
    name: "Dave",
    age: 2,
}
    
var testArray1 = [name1, name2, name3];

console.log(testArray.sort(basicSort))
console.log(testArray1.sort(sortSomething))

function sortSomething(value1, value2) {
    var sortedName = basicSort(value1, value2, 'name', 'length');
    return sortedName;
}



function sortString(string1, string2){
    var sortedString = basicSort(string1, string2, "length");
    return sortedString;
}


var longString1 = "1. This is a long string to test the sort function";
var longString2 = "2. This is a shorter string";
var longString3 = "3. This a medium length string";
var longString4 = "4. This is going to be the longest string of them all";
var longString5 = "5. I lied about the longString4 and this is equal len";
var stringArray = [longString1, longString2, longString3, longString4, longString5]


console.log(stringArray.sort(sortString));

/*Create an array of objects (don’t need to use new here, 
just regular object literals). 
These objects will contain a name and email property. 
Then, run some code that will sort your array by the longest name. 
Then, run some code that will sort your array by e-mail 
address in alphabetical order.*/

function Person(name, email, num) {
    this.name = name;
    this.email = email;
    this.num = num
}
var Kayla = new Person("Kayla", "kayla@mail.com", 22)
var Dave = new Person("Dave", "dave@mail.com", 25)
var Sir = new Person("Sir Edward", "Edward.has.long.email.com", 10)
var Student = new Person("Student", "Student@mail.mcgill.ca", 3)

var arrayOfObjects = [Kayla, Dave, Sir, Student];


var Kayla1 = {name: "Kayla", email: "kayla.hennig@mail.com"}
var Dave1 = {name: "Dave", email: "dave.mail.com"}
var Sir1 = {name: "Sir Edward", email: "ed2@mail.com"}
var Student1 = {name: "Student", email: "stident@mail.mcgill.com"}

var arrayOfObjects1 = [Kayla1, Dave1, Sir1, Student1];

function sortName(name1, name2) {
    var sortedName = basicSort(name1, name2, "name", "length");
    return sortedName;
}


function sortEmail(){
    var ArrayHolder = arrayOfObjects1;
    for (var i = 0; i < arrayOfObjects1.length; i++) {
        ArrayHolder[i].email = arrayOfObjects1[i].email.toLowerCase();
    }

    function sortEmail2(lowerEmail1, lowerEmail2) {
        var sorted = basicSort(lowerEmail1, lowerEmail2, "email");
    return sorted;
    }
    return ArrayHolder.sort(sortEmail2); 
};


console.log(arrayOfObjects1.sort(sortName));
console.log(sortEmail())

/*Create a function that can be used with Array.prototype.map. 
This function should take a number and return its square. 
Then, use this function with map on an array of numbers to check the result*/

function squareArray(numToSquare) {
    return numToSquare * numToSquare;
}

var arrayToSquare = [2, 5, 9, 7, 10];
var squaredArray = arrayToSquare.map(squareArray)
//console.log(squaredArray);

/*Create a function that can be used with Array.prototype.map. 
This function should be able to take an object and square its “num” property. 
Then, use this function with map on an array of objects each containing 
a “num” property.*/
/*added a num property to my Person object above */

function squareObj(objToSquare){
    return objToSquare.num * objToSquare.num;
}


var squaredObjArray = arrayOfObjects.map(squareObj);
//console.log(squaredObjArray);

/*Create a function called operationMaker that takes 
only a string called operation as argument. This string could be “add”, 
“subtract”, “mult” or “div”. Your function will return a function that 
will take two numbers and return the result of running operation on these 
numbers*/




function operationMaker(operator){
    switch (operator) {
        case 'add':
           return function (add1, add2) {
               return add1 + add2;
           }
        case 'subtract':
            return function (sub1, sub2) {
                return sub1 - sub2;
            }
        case 'div':
            return function (div1, div2){
                return div1 / div2;
            }
        case 'mult':
            return function (mult1, mult2) {
                return mult1 * mult2;
            }
        default:
            return "incorrect operator given"
    }
    
}

var adder = operationMaker("add");
var sum = adder(5,10);
//console.log(sum);

var multiplier = operationMaker("mult");
var product = multiplier(5, 10); 
//console.log(product)