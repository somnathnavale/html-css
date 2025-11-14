
const header=document.querySelector('.header');
const btn=document.querySelector(".btn");
const winByA=document.querySelector('.playerA');
const winByB=document.querySelector('.playerB');
const result=document.querySelector('.result');

let winsOfA=0;
let winsOfB=0;
let totalGame=0;
let drawnMatch=0;

const handleClick=()=>{
    totalGame++;
    header.innerText=`Game : ${totalGame}`;
    let initialPowerOfA=100;
    let initialPowerOfB=100;

    while(initialPowerOfA>0 && initialPowerOfB>0 )
    {
        let randomPowerOfA=Math.floor(Math.random()*5 + 1);
        let randomPowerOfB=Math.floor(Math.random()*5 + 1);

        initialPowerOfA-=randomPowerOfB;
        initialPowerOfB-=randomPowerOfA;
        
        if(initialPowerOfA<=0 && initialPowerOfB>0)
        {
            winsOfB++;
            winByB.innerText=winsOfB;
            break;
        }
        else if(initialPowerOfB<=0 && initialPowerOfA>0)
        {
            winsOfA++;
            winByA.innerText=winsOfA;
            break;
        }
        else if(initialPowerOfA<=0 && initialPowerOfB<=0)
        {
            drawnMatch++;
        }
    }
    if((winsOfA===3 || winsOfB===3) || totalGame==5 )
    {
        btn.removeEventListener('click',handleClick);

        winsOfA===winsOfB ? ( drawnMatch===1 ? result.innerText+=`\n ${drawnMatch} subgame is draw` :result.innerText+=`\n ${drawnMatch} subgames are draw`)
        :(winsOfA>winsOfB) ? (result.innerText=`Player 'A' won with score of ${winsOfA}:${winsOfB}\n\n Please reload to play again`)
        :(result.innerText=`Player 'B' won with score of ${winsOfB}:${winsOfA}\n\n Please reload to play again`)
        
        if(drawnMatch && (winsOfA!==winsOfB)){
            drawnMatch===1 ? result.innerText+=`\n\n ${drawnMatch} subgame is draw`
            :result.innerText+=`\n\n ${drawnMatch} subgames are draw`
        }
    }
}


btn.addEventListener('click',handleClick)



