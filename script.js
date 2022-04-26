'use strict'

const btnshowmodel=document.getElementById('btn-show');
const btnclosemodel=document.getElementById('btn-close');
const modelcontainer=document.getElementById('model-container');
const overlaycontainer=document.getElementById('overlay');

btnshowmodel.addEventListener('click',function(){
    modelcontainer.classList.add('show');
    overlaycontainer.classList.add('show');
});


btnclosemodel.addEventListener('click',function(){
    modelcontainer.classList.remove('show');
    overlaycontainer.classList.remove('show');
});

overlaycontainer.addEventListener('click',function(){
    modelcontainer.classList.remove('show');
    overlaycontainer.classList.remove('show');
});


/*document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
        modelcontainer.classList.remove('show');
        overlaycontainer.classList.remove('show');

    }
});*/



