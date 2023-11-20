// selection here

let fontSize = document.querySelector('#fontSize');
let bgColor = document.querySelector('#bgColor');
let textArea = document.querySelector('#textArea');

function get(){
    let getted = localStorage.getItem('fontSize')
    textArea.style.fontSize = getted;

}


// fontSize listener here
fontSize.addEventListener('change',(event)=>{
    let value = event.target.value
    localStorage.setItem('fontSize',value)
    get()
})


// Background color listener here
bgColor.addEventListener('change',(event)=>{
    // textArea.style.background = event.target.value;
    localStorage.setItem('bgColor',event.target.value)
    localStorage.getItem('bgColor')
})