// We'll use these later. Look at it for a moment then come back to it, and again. See if you can figure out how it works. 
const recursiveLoop = (array, n) => {
    if ( n < 0 ) return;
    console.log(array[n]);
    recursiveLoop(array, n - 1);
}

const listArray = (array) => {
    recursiveLoop(array, array.length - 1);
}

// An array ... 
myArray = [6,5,4,3,2,1];

// I wish to print this array. 
console.log(myArray);

// but if I wish to be fancy as I do in other languages....
for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (const element of myArray) {
    console.log(element);
}

listArray(myArray);