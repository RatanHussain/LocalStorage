// selection here

let fontbtn = document.querySelector('#fontSize');
let bgbtn = document.querySelector('#bgColor');
let textArea = document.querySelector('#textArea');
let clearbtn = document.querySelector('#btn');




// Get localStorage key here


function initilige(){
    let getFont = localStorage.getItem('font')
    let getBg = localStorage.getItem('bg')
    if(getFont && getBg){
        bgbtn.value = getBg;
        fontbtn.value = getFont;
        textArea.style.fontSize = getFont;
        textArea.style.background = getBg;

    }
    if(!getFont && !getBg){
        fontbtn.value = '16px';
        bgbtn.value = 'pink';
        textArea.style.fontSize = getFont;
        textArea.style.background = 'pink';

    }


}


// all listener here
fontbtn.addEventListener('change',(event)=>{
    let fontSize = event.target.value
    localStorage.setItem('font', fontSize)
    textArea.style.fontSize = fontSize;
})
bgbtn.addEventListener('change',(event)=>{

    let bgColor = event.target.value
    localStorage.setItem('bg', bgColor)
    textArea.style.background = bgColor;
    // initilige()
})
clearbtn.addEventListener('click',()=>{
    localStorage.removeItem('font')
    localStorage.removeItem('bg')
})

initilige()