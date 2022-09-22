// Set Timeout. A way to wait...
// Syntax... setTimeout(thingToCall, afterThisLong);
// const delayedGreeting = setTimeout(() => {console.log("Hello")},5000);

const sleep = (howLongToSleep) => {
    return new Promise((resolve) => setTimeout(resolve, howLongToSleep));
}


//async ONLY FOR THAT FUNCTION!! 
const delayedGreeting = async () => {
    await sleep(5000);
    console.log("Hello");
}


// HOW TO DO .then() ????? 
delayedGreeting();

// what if I want to wait on this. 



// RECURSION! Another way to loop.
// Functions
const recursiveLoop = (array, n) => {
    if ( n < 0 ) return;
    console.log(array[n]);
    recursiveLoop(array, n - 1);
}

const listArray = (array) => {
    recursiveLoop(array, array.length - 1);
}

// Usage
myArray = [6,5,4,3,2,1];
listArray(myArray);