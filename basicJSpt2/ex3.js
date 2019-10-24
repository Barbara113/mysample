const myArray = [34, 5, 4,];
const yourArray = [2, 4, 7,];
for(let i=0; i<myArray.length; i++){
    for(let j=0; j<yourArray.length; j++){
        if(myArray[i]===yourArray[j]){
            console.log('Both loops have the number: ' + yourArray[j])
        }
    }
}