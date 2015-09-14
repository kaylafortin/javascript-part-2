/*This is a function that sorts based on the string length
I saved the test strings as variables just to make the code
look a bit neater. I understand that I could have just put them
directly in elements in the array.*/

function sortString(string1, string2){
    if (string1.length > string2.length) {
        return 1;
    }
    if (string2.length > string1.length) {
        return -1;
    }
    if (string1.length === string2.length){
        return 0;
    }
}

var longString1 = "1. This is a long string to test the sort function";
var longString2 = "2. This is a shorter string";
var longString3 = "3. This a medium length string";
var longString4 = "4. This is going to be the longest string of them all";
var longString5 = "5. I lied about the longString4 and this is equal len";
var stringArray = [longString1, longString2, longString3, longString4, longString5]

console.log(stringArray);
console.log(stringArray.sort(sortString));


