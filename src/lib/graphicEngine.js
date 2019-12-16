//  IMPORTS
const IS = require("./interactionSystem");
const RF = require("./requestFilter");

//  GLOBAL VARIABLES
let current = 1;

//  CREATE MENU ELEMENTS
const setMenu = (container) => {
  const menu = [ "pokedex", "trainer", "credits" ];
  const ul = document.createElement('ul');
  menu.forEach((item, id) => {
    const li = document.createElement('li');
    const txt = document.createTextNode(item);
    li.appendChild(txt);
    li.setAttribute("id", id);
    ul.appendChild(li);
  });
  container.appendChild(ul);
  loadMenu(ul);
}; // - end setMenu

//  LINK MENU ITEMS
const loadMenu = (menu) => {
  menu = menu.childNodes;
  menu.forEach((li, id) => {
    li.addEventListener("click", e => {
      RF.requestState(`/${e.target.textContent}`).then(content => {
        IS.select('.screen').innerHTML = content;
        if(id === 0){
          RF.requestPokemon(current).then(res => {                    //  explore observer pattern
            loadPokemon(res, IS.select(".pokedex"));                  //
          });
          const uiButtons = [".right",".left",".center",".more"];     //
          IS.select(uiButtons).forEach(btn => {    //
            btn.addEventListener("click", e => {                      //
              if(e.target.classList.value === 'right'){               //
                IS.info(false);                                       //
                if(current < 809 ) current++;                         //
              }                                                       //
              if(e.target.classList.value === 'left'){                //
                IS.info(false);                                       //
                if(current > 1) current--;                            //
              }                                                       //
              RF.requestPokemon(current).then(res => {                //
                loadPokemon(res, IS.select(".pokedex"));              //
              });                                                     //
              if(e.target.classList.value === 'center'){              //
                RF.requestPokemon(current).then(res => {              //
                  loadInfo(res, IS.select(".info"));                  //
                });                                                   //
                IS.info(true);                                        //
              }                                                       //
              // if(e.target.classList.value === 'more'){
              //   IS.select(".data").classList.toggle('open');
              //   RF.requestPokemon(current).then(res => {
              //     //  SHOW POKEMON DATA
              //   });
              // }

            }); // - end eventListener                                //
          }); // - end forEach                                        //  ---
        } // -  end if
      }); // -  end fetch
    }); // -  end eventListener
  }); // -  end forEach
};  // -  end loadMenu

//  LOAD POKEMONS ON CONTAINER
const loadPokemon = (data, container) => {
  const pokemon = RF.requestImage(data.id);
  container.innerHTML = `
  <div>
    <img src="${pokemon.img}" width="90%">
    <span>${pokemon.number}</span>
  </div>
  <p>${data.name}</p>
  `;
};  // - end loadPokemon

//  LOAD POKEMON INFO
const loadInfo = (data, container) => {
  const stats = data.stats.reverse().reduce((html, val) => {
    html += `<p>${val.stat.name}<progress value="${val.base_stat}" max="140"></progress></p>`;
    return html;
  },"");
  const type = data.types.reverse().reduce((html, val) => {
    html += `<span class="${val.type.name}">${val.type.name}</span>`;
    return html;
  },"");
  fetch(data.species.url).then(prep=>prep.json()).then(specie=>{
    const description = specie.flavor_text_entries.reduce((arr,txt) => {
      if(txt.language.name === "en")
        arr.push(txt.flavor_text);
      return arr;
    },[]);
    container.innerHTML = `
      <div style="text-align:center;">${type}</div>
      <br><br><br>
      ${stats}
      <br>
      <p>${description[0]}</p>
    `;
  });
};
//  ---


//  EXPORTS
module.exports = {
    setMenu
};
