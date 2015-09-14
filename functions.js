/*This is a function that sorts based on the string length
I saved the test strings as variables just to make the code
look a bit neater. I understand that I could have just put them
directly in elements in the array.*/
function basicSort(value1, value2, prop1, prop2) {
    if (prop2 === undefined) {
        if (value1[prop1] > value2[prop1]) {
            return 1;
        }
        if (value2[prop1] > value1[prop1]) {
            return -1;
        }
        return 0;
    }
    if (value1[prop1][prop2] > value2[prop1][prop2]) {
        return 1;
    }
    if (value2[prop1][prop2] > value1[prop1][prop2]) {
        return -1;
    }
    return 0;
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

//console.log(stringArray);
//console.log(stringArray.sort(sortString));

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


function sortName(name1, name2) {
    var sortedName = basicSort(name1, name2, "name", "length");
    return sortedName;
}


function sortEmail(){
    var ArrayHolder = arrayOfObjects;
    for (var i = 0; i < arrayOfObjects.length; i++) {
        ArrayHolder[i].email = arrayOfObjects[i].email.toLowerCase();
    }

    function sortEmail2(lowerEmail1, lowerEmail2) {
        var sorted = basicSort(lowerEmail1, lowerEmail2, "email");
    return sorted;
    }
    return ArrayHolder.sort(sortEmail2); 
};


//console.log(arrayOfObjects.sort(sortName));
//console.log(sortEmail())

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
console.log(sum);

var multiplier = operationMaker("mult");
var product = multiplier(5, 10); 
console.log(product)