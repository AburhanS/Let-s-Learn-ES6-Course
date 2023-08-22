"use strict"

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Good to go!");
    }, 5000)
    
/*     setTimeout(() => {
        reject("uh oh")
    }, 2500); */
});

myPromise.then((res) => {
    console.log(res);
} /* , (err) => {
    console.log(err);
} */ )
.catch((err) => {
    console.log(err);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 - the promising")
    }, 3000);
});  

Promise.all([myPromise, myPromise2])
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
    });