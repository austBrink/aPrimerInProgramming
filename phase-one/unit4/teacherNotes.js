// recursion example for webdev simplified. 
function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log('yo');
}

function countDownRecursive(n) {
    // first need a break.
    if (n <= 0) {
        console.log('yo');
        return;
    }
    console.log(n);
    countDownRecursive(n-12);
}

// use recursion insread of a loop for arrays!! 
const recursiveLoop = () => {
    
}

countDown(10);