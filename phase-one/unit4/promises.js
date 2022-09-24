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