const block = document.getElementById('block');
const hole =document.getElementById('hole');
const personnage =document.getElementById('personnage');
let jumping = 0;

/* hole.addEventListener('animationiteration', () => {
    const random = -(( Math.random()*300)+150);
    hole.style.top = random + "px";
});  */ 
hole.addEventListener('animationiteration', () => {
    const random = Math.random()*3;
    const top = (random*100)+150;
    hole.style.top = -(top) + "px";
});  

setInterval(function(){
    const personnageTop = parseInt(window.getComputedStyle(personnage).getPropertyValue("top"));
    if(jumping==0){
        personnage.style.top = (personnageTop+3)+"px";
    }
},10);

function jump(){
    jumping =1;
    let jumpCount = 0;
    const jumpInterval = setInterval(function(){
        const personnageTop = parseInt(window.getComputedStyle(personnage).getPropertyValue("top"));
        if(personnageTop>6){
             personnage.style.top = (personnageTop-5)+"px";
         }
        if( jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
};
