//  SELECT ELEMENT FUNCTION
const select = (str) => {
  if(typeof(str) === 'string') return document.querySelector(str);
  else if(Array.isArray(str)){
    str = str.join(",");
    return document.querySelectorAll(str);
  }
};
//  ---

//  ANIMATIONS  **need refactoring
const info = action => {
  if(action){
    if(select(".info.open")){
      select(".info").classList.remove('fadeInLeft');
      select(".info").classList.add('fadeOutLeft');
      setTimeout(() => select(".info").classList.toggle('open'), 180);
    }else{
      select(".info").classList.toggle('open');
      select(".info").classList.remove('fadeOutLeft');
      select(".info").classList.add('animated', 'fadeInLeft', 'faster');
    }
  }else{
    if(select(".info.open")){
      select(".info").classList.remove('fadeInLeft');
      select(".info").classList.add('fadeOutLeft');
      setTimeout(() => select(".info").classList.toggle('open'), 180);
    }
  }
};
//  ---

//  CLICKABLE POKEBALL TOP & BOTTOM
select(".top").addEventListener("click", () => {
  const frame = select(".frame");
  frame.classList.toggle("open");
  frame.classList.add("fadeIn");
  select(".bottom").classList.toggle("slideInDown");

  if(select(".info.open")){
    select(".info").classList.remove('fadeInLeft');
    select(".info").classList.toggle('open');
  }

});

select(".bottom").addEventListener("click", () => { document.location.href="/"; });
// ---

//  EXPORTS
module.exports = {
    select,
    info
};
