//Last element of an array
let arr1 = [3, 7, 34, 90, 12];
let arr2 = [true, "green", "where", 12, 56];
console.log(arr1[arr1.length-1]);
console.log(arr2[arr2.length-1]);

//Join an array elements into a string
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let pets = myPets.join(", ");
console.log(pets);

//Sort numbers in an array
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort((a, b) => a - b);
console.log(arr3);

//aArray without duplicates and array that only contains the duplicates
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let unrepeated = [...new Set(arr)];
let repeated = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log("Array without duplicates:", unrepeated);
console.log("Array with duplicates:", [...new Set(repeated)]);

//Searching a word
let arr5 = ["the", "way", "x", 4];
let search = "food";

if (arr5.includes(search)) {
    console.log(search);
} else {
    console.log("The search word was not found");
}

//Sort string
let word = "renniw";
let sortedWord = word.split("").sort().join("");
console.log(sortedWord);

//Insert item to an array
let fruits = ["Kiwi", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Peach", "Strawberry", "Watermelon", "Cherry"];
let vegitable = "Tomato"
fruits.splice(5, 0, vegitable);
console.log(fruits);