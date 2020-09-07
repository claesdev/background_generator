var css = document.querySelector('h3');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var body = document.querySelector('body');
var randBtn = document.querySelector('#random');

body.onload = () => setGradient();

const setGradient = () => {
  body.style.background = 'linear-gradient(to right, ' 
  + color1.value 
  + ", " 
  + color2.value 
  + ")";

  css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

randBtn.addEventListener('click', function() {
  color1.value = "#" 
  + Math.round(Math.random() * 255).toString(16).padStart(2, 0)
  + Math.round(Math.random() * 255).toString(16).padStart(2, 0)
  + Math.round(Math.random() * 255).toString(16).padStart(2, 0)
  color2.value = "#" 
  + Math.round(Math.random() * 255).toString(16).padStart(2, 0)
  + Math.round(Math.random() * 255).toString(16).padStart(2, 0)
  + Math.round(Math.random() * 255).toString(16).padStart(2, 0)

  setGradient()
})
