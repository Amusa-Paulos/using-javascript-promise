var data = "initial value";

function getData() {
    return new Promise(function(resolve, reject){
        fetch('https://api.electricitymap.org/v3/zones')
        .then((data)=>{
            console.log("done requesting the data, resolving..");
            resolve(data);
            // console.log(data);
        }).catch((err)=>{
            console.log("an error occured, rejecting...");
            reject(err)
        })

    })
    
}

// var p1 = new Promise(callbackFn)
// var p2 = new Promise(callbackFn)

// Promise.all(p1, p2)


// getData().then(function (data) {
//     console.log(data);
//     console.log("request successful");
// },
// function (err) {
//     console.log(err);
//     console.log("request not successful");
// })

// getData().then(function (data) {
//     console.log(data);
//     console.log("request successful");
// }).catch(function (err) {
//     console.log(err);
//     console.log("request not successful");
// })

new Promise(function (resolve, reject) {
    fetch('https://api.electricitymap.org/v3/zones')
    .then((data)=>{
        console.log("done requesting the data, resolving..");
        resolve(data);
        // console.log(data);
    }).catch((err)=>{
        console.log("an error occured, rejecting...");
        reject(err);
    })
}).then(function (data) {
    console.log(data);
    console.log("request successful");
}).catch(function (err) {
        console.log(err);
        console.log("request not successful");
})
