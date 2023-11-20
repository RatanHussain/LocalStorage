// selection here

let fontSize = document.querySelector('#fontSize');
let bgColor = document.querySelector('#bgColor');
let textArea = document.querySelector('#textArea');



// fontSize listener here
fontSize.addEventListener('change',(event)=>{
    // textArea.style.fontSize = event.target.value;
    let value = event.target.value
    localStorage.setItem(fontSiz,value)
    localStorage.getItem('fontSize')
})


// Background color listener here
bgColor.addEventListener('change',(event)=>{
    // textArea.style.background = event.target.value;
    localStorage.setItem('bgColor',event.target.value)
    localStorage.getItem('bgColor')
})