const star=document.querySelectorAll('.star');
const rating=document.querySelector('.rating');


star.forEach((st,idx)=>{
    st.addEventListener('click',()=>{
        star.forEach((str,curridx)=>{
            if(curridx<=idx){
                str.style.opacity=1;
            }
            console.log(curridx,idx)
        })
        rating.textContent=`${idx+1} out of 5`;
    })
})