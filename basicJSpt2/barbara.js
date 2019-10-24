//above every function please write what it does in one sentance
//Pay attention on exporting those functions so you could see the result in html file (SEE HTML FILE under your name)

//feel free to use your own new variables (object, arrays, numbers, strings....)
let numbers = [12, 123, 32, 1, 2, 89, 14, 25]
const inventory = [
	{ name: 'apples', quantity: 2 },
	{ name: 'bananas', quantity: 0 },
	{ name: 'cherries', quantity: 5 }
];

//Here are a few examples to get you started :) 
function First(num) {
	return num
}
document.getElementById("first").innerHTML = numbers.filter(First);

function Second() {
	alert("Hello Barbara, I hope you're having a good day! :) ")
}

function Third() {
	let words = ["hello", "no", "yes", "please", "oohoho", "&"]
	let filteredWords = words.filter(word => word.length < 6)
	return filteredWords
}
document.getElementById('third').innerHTML = Third();

// Function is used to join two or more strings together

function Concat(){

	 let str = 'It';
	 let value = str.concat( ' is', ' a', ' great', ' day');

	return value
}
	document.getElementById("Concat").innerHTML = Concat();



//Operators are used to perform  arithmetic between variables and/or values.
function Operators() {

	let a = 78;
	let b = 56;
	let result = a%b;

	return result


}
	document.getElementById("Operators").innerHTML = Operators();

// Returns the value of the first element in the provided array that satisfies the provided testing function.
function Find() {

	let myArray =[10, 34, 56, 2, 1, 78];
	let found = myArray.find(function(element){
		return element > 10;

	});
	return found

}

document.getElementById("Find").innerHTML = Find();


 //For statement creates a loop that consists of three optional expressions
function For(){
	let str = "";
	for(let i=0; i<9; i++){
	
		str += i;
		
	}
	return str;



}
document.getElementById('For').innerHTML = For();




// Calls a function once for each element in an array in order. 
//function ForEach() {

		let a = ['a', 'b', 'c'];
		a.forEach(function(entry){
			return entry;
		})
		console.log(a);

		

	
	
	
	

	document.getElementById("ForEach").innerHTML = a;
	


 
//the map() method creates a new array with the results of calling a provided function.
function Map() {
	let array2 = [5, 7, 8, 45, 67];
	const map1 = array2.map(x => x*2);

	return map1;

}



document.getElementById("Map").innerHTML = Map();

//The sort() method sorts the items of an array
function Sort() {
	let fruit = ["Apple", "Strawberry", "Kiwi", "Bananas"];
	fruit.sort();

	return fruit;
}


document.getElementById("Sort").innerHTML = Sort();

//Splice method removes or adds items to or from array, and returns the removed items.
function Splice() {

	let vegetables = ["Salad", "Potato", "Cucumber", "Tomato"];
	vegetables.splice(2, 0, "Avokado", "Corn");

	
	return vegetables;


}



document.getElementById("Splice").innerHTML = Splice();



//toString method converts a number to a string
function toString() {

	let num = 27;

	let n = num.toString();

	return n;


}
document.getElementById("toString").innerHTML = toString();


//findIndex returns the index of the first element in an array that pass a test.
//function findIndex() {
	let b = [2, 0, 78, 65, 56];
	function isLargeNumber(element){
		return element > 56;
		console.log(b.findIndex(isLargeNumber));
	
	
	}
	document.getElementById("findIndex").innerHTML = b.findIndex(isLargeNumber);





// Arrow function return value by default, 
//function ArrowFunction() {

	let materials = [
		'Hydrogen',
		'Helium',
		'Lithium',
		'Beryllium'
	];

console.log(materials.map(material => material.length));

document.getElementById("arrowFunction").innerHTML = materials.map(material => material.length);



// If statement is executed if a condition is true, else statement is executed if a condition is false. 

function IfElse() {

	let a;
	let b;
	
	a = 5;
	b = 2;
	let result;

	if(a<b){
		result = true;
	} else{
		result = false;
	}

	return result;

}
	
	
	


	
document.getElementById("ifElse").innerHTML = IfElse();


function Concaat(){

    let str = 'Moje';
    let value = str.concat(' ime', ' je', ' Barbara', ' Novak');

   return value
   
}

document.getElementById("Concaat").innerHTML = Concaat(); 

function Operators2() {

	let a = 98;
	let b = 24;
	let result = a/b;

	return result


}
	document.getElementById("Operators2").innerHTML = Operators2();


function Find2() {

		let myArray =[10, 34, 56, 2, 1, 78];
		let found = myArray.find(function(element){
			return element  > 20;
	
		});
		return found
	
	}
	
	document.getElementById("Find2").innerHTML = Find2();


function For2(){
		let str = "";
		for(let i=4; i<20; i++){
		
			str += i;
			
		}
		return str;
	
	
	
	}
	document.getElementById('For2').innerHTML = For2();



function Map2(){
	let d = ['23', '16', '34', '32'];
	const map2 = d.map(x => x*4);

	return map2;


}

document.getElementById("Map2").innerHTML = Map2();



function Splice2(){

	let ar = ["apple", "pear", "peach", "onion"];
	ar.splice(3, 0, "avokado", "onion" , "melon");

	return ar;
	
}	

document.getElementById("Splice2").innerHTML = Splice2();








