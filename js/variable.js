const input = document.getElementById('wdth-slider');
const title = document.querySelector('h1');
const input2 = document.getElementById('sland-slider');
let opacity = 1;
let elsh = 0;
function updateFontStyles(){
const fontWeight = input.value;
const sland = input2.value;
title.style.fontWeight = fontWeight;
title.style.fontVariationSettings = "'slnt' " +sland +",  'ELSH' " +elsh;
title.style.opacity = opacity;


}

//input.addEventListener('input', function(){
    
    const fontWeight = input.value;
    console.log(fontWeight); 
    title.style.fontWeight = fontWeight

//});
//input2.addEventListener('input', function(){
  //  const sland = input2.value;
   
    //title.style.fontVariationSettings = "'slnt' " +sland;

//});

input.addEventListener('input', updateFontStyles);
input2.addEventListener('input', updateFontStyles);

window.addEventListener('mousemove', function(event){


const mouseX = event.clientX;
const mouseY = event.clientY;
opacity = 1 - (mouseX / window.innerWidth);
elsh = (mouseY / window.innerHeight) * 100;
updateFontStyles();

})