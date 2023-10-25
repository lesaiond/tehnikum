function spinAround(turns) {
    // Here be dragons!
    let circle = 0
    console.log(turns)
    for (let i = 0; i < turns.length ; i++) {
        if (turns[i] == 'right') {
            // console.log(turns[i])
            circle += 90
        } if (turns[i] == 'left') {
            circle -= 90
            // console.log(turns[i])
        }
    }
    console.log(circle)
    let result = circle / 360
    return result;
    // console.log(result);

}

spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'])
