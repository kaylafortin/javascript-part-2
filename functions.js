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
console.log(stringArray.sort(sortString));

/*Create an array of objects (don’t need to use new here, 
just regular object literals). 
These objects will contain a name and email property. 
Then, run some code that will sort your array by the longest name. 
Then, run some code that will sort your array by e-mail 
address in alphabetical order.*/

function Person(name, email) {
    this.name = name;
    this.email = email;
}
var Kayla = new Person("Kayla", "kayla@mail.com")
var Dave = new Person("Dave", "dave@mail.com")
var Sir = new Person("Sir Edward", "Edward.has.long.email.com")
var Student = new Person("Student", "Student@mail.mcgill.ca")

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


console.log(arrayOfObjects.sort(sortName));
console.log(sortEmail())
