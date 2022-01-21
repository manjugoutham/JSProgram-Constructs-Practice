
function coinFlip() {
    let head = 1;
    let tail = 2;

    let floor = Math.floor(Math.random() * 2);

    if (floor === 0) {
        console.log("Head");
    } else if (floor === 1) {
        console.log("Tail");
    }
}

coinFlip();