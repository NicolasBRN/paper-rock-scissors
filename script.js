function computerPlay() {
    let result = Math.floor(Math.random() * 3)
    switch (result) {
        case 0:
            console.log("Paper");
            break;
        case 1:
            console.log("Rock");
            break;
        case 2:
            console.log("Scissors");
            break;
    }
}

computerPlay()