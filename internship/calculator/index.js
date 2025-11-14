const items=document.querySelectorAll(".item");
const display=document.querySelector('.display');
const clear=document.querySelector('.clear');
const clearlast=document.querySelector('.clearlast');


items.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        let typed=e.target.innerText;
        let str=display.textContent;
        if(typed==='AC')
        {
            display.textContent='';
        }
        else if(typed==='DEL'){
            display.textContent=str.length ? str.slice(0,str.length-1) : '';
        }
        else if(typed==='='){
            display.textContent=eval(str);
        }
        else{
            display.textContent+=typed;
        }
    })
})

