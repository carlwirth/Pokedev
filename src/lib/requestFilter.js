const DR = require("./dataRefactoring");


const request = data => {

    if (typeOf(data) === "number") {
        //construct url
        const url = `https://pokeapi.co/api/v2/pokemon/${data}`;
        const x = makeRequest(url);
        return x;

    } else if (typeOf(data) === "object") {
        // construct url
        const url = `https://pokeapi.co/api/v2/pokemon/${data.id}`;
        const x = makeRequest(url);
        return x;
    };

    // check if data is a number of an object
    // and make a rerquest depeding on what kind of variable
    // is it
};

const makeRequest = (url) => {
    fetch(url).then(res => res.json()).then(res => {
        return DR.minify(res);
    });
};