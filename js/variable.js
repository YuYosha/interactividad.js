const input = document.getElementById('wdth-slider');
const title = document.querySelector('h1');
const input2 = document.getElementById('sland-slider');

input.addEventListener('input', function(){
    
    const fontWeight = input.value;
    console.log(fontWeight); 
    title.style.fontWeight = fontWeight

});
input2.addEventListener('input', function(){
    const sland = input2.value;
   
    title.style.fontVariationSettings = "'slnt' " +sland;

});