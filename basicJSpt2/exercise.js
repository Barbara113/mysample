let name = 'Barbara';

console.log(name);

let firstName = 'Barbara';
let lastName= 'Novak';

name = firstName + ' ' + lastName;
console.log(name);

//function Concat(){
    let a = 'I';
    let value = a.concat(" am ", "a ", "student");

    console.log(value);

let first=23;
let second= 34;
 
let result = second%first;

console.log(result);

//find

let myArray =[11, 23, 4, 3, 2, 56, ];
let found = myArray.find(function(element){
     return element < 3;

});

console.log(found);

//for

let string = "";

for(i=0; i< 15; i++){
    string += i;

}

console.log(string);

//Map

let ar = [12, 2, 3, 45, 65];
let ar2= ar.map(x => x*3);

console.log(ar2);

//if then

let c=23;
let d=8;

let result1;

if(c%d>3){
    console.log(true);
} else{
    console.log(false);
}


