// Select all Element here
let fontBtn = document.querySelector('#fontSize')
let bgBtn = document.querySelector('#bgColor')
let textArea = document.querySelector('.textArea')
let reset = document.querySelector('#btn')


function exten(font,bg){
    fontBtn.value = font;
    textArea.style.fontSize = font;
    bgBtn.value = bg;
    textArea.style.background = bg;
}


function Initilize(){
    let getFont = localStorage.getItem('FontSize');
    let getBg = localStorage.getItem('bgColor');

    if(getFont && getBg){
        exten(getFont,getBg)
    }
    if(getFont && !getBg){
        exten(getFont,'red')
    }
    if(!getFont && getBg){
        exten('20px',getBg)
    }
    if(!getFont && !getBg){
        exten('18px','pink')
    }
}




// all listeber here

fontBtn.addEventListener('change',(event)=>{
    let fontSize1 = event.target.value;
    localStorage.setItem('FontSize', fontSize1)
    textArea.style.fontSize = fontSize1;

})

bgBtn.addEventListener('change',(event)=>{
    let bgColor = event.target.value;
    localStorage.setItem('bgColor', bgColor)
    textArea.style.background = bgColor;

})

reset.addEventListener('click', ()=>{
    localStorage.removeItem('FontSize')
    localStorage.removeItem('bgColor')
})


Initilize();