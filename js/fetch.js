"use strict"

fetch("https://api.chucknorris.io/jokes/random")
    .then((res) =>{
        res.json().then((data) => {
            console.log(data);
        })
    })
    .catch((err) => {
        console.log(err);
    });