<<<<<<< HEAD
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
=======
const requestPokemon = data => {
  let url = `https://pokeapi.co/api/v2/pokemon/${data}`;

  if(typeof(data) === "object"){
    url = `${data.url}`;
  }

  // {
  //   id: 1,
  //   url: 'https://...'
  // }

  return new Promise((resolve, reject) => {
    fetch(url).then(prep => prep.json()).then(res => {
      try{
        resolve(res);
      }catch(error){
        reject(error);
      }
    }); // - end fetch
  }); // - end Promise
}; // - end requestPokemon

const requestState = state => {
  return new Promise((resolve, reject) => {
    fetch(state, {mode: 'no-cors'}).then(prep => prep.text()).then(res => {
      try{
        resolve(res);
      }catch(error){
        reject(error);
      }

    });
  });
};

const requestImage = number => {
  if(number < 10) number = '00'+number;
  else if(number < 100) number = '0'+number;
  return { img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`, number }
};


module.exports = {
  requestPokemon,
  requestImage,
  requestState
};
>>>>>>> f84c0371dc13d5f361e9d0f5f727a1a3158a3e95
