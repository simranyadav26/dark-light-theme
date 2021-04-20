const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav= document.getElementById('nav');
const toggleIcon= document.getElementById('toggle-icon');
const image1= document.getElementById('image1');
const image2= document.getElementById('image2');
const image3= document.getElementById('image3');
const textBox= document.getElementById('text-box');

//light and dark color

function imgColor(color){
    image1.src= `img/undraw_proud_coder_${color}.svg`;
    image2.src= `img/undraw_feeling_proud_${color}.svg`;
    image3.src= `img/undraw_conceptual_idea_${color}.svg`;

}

//Dark Mode
function darkMode(){
    nav.style.background= 'rgb(0 0 0 / 50%)';
    textBox.style.background= 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent= 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imgColor('dark');
    
}
//light Mode
function lightMode(){
    nav.style.background= 'rgb(255 255 255 / 50%)';
    textBox.style.background= 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent= 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imgColor('light');
    
}

//Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}
//Event Listener
toggleSwitch.addEventListener('change',switchTheme);

//check local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme ==='dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}
