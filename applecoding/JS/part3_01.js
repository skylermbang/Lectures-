// callback

function first(second) {
    console.log(1)
    second()
}

function second() {
    console.log(2)
}


first(second)