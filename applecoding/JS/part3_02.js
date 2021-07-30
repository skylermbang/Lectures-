// promise
var promise = new Promise(function (resolve, reject) {

    setTimeout(function () { resolve() }, 1000)

});

promise.then(function () {
    console.log(" successful addition ")

}).catch(function () {
    console.log("hell nah you fucked up")
})