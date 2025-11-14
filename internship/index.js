
const items=document.querySelectorAll('.item');
const wrapper=document.querySelector('.wrapper');



//this is event delegation

wrapper.addEventListener('click',(e)=>{
    items.forEach(item=>{
        item.style.backgroundColor="white";
    })
    e.target.style.backgroundColor="green";
})

// console.log()


// for(let item of items){
//     item.addEventListener('click',(e)=>{
//         for(let curritem of items){
//             if(curritem!==item){
//                 curritem.style.backgroundColor='white';
//             }
//         }
//         item.style.backgroundColor='green';
//     })
// }
// items.forEach((item)=>{
//     item.addEventListener('click',(e)=>{
//         items.forEach((currItem)=>{
//             if(item!==currItem)
//             {
//                 currItem.style.backgroundColor='white';
//             }
//         })
//         item.style.backgroundColor='green';
//     })
// })


// const order=()=>{
//     setTimeout(()=>{
//         console.log('order is placed');
//         setTimeout(()=>{
//             console.log("started preparing");
//             setTimeout(()=>{
//                 console.log("In packaging process");
//                 setTimeout(()=>{
//                     console.log("order Dispatched");
//                     setTimeout(()=>{
//                         console.log("deliverd successfully")
//                     },2000)
//                 },1000)
//             },2000)
//         },3000)
//     },1000)
// }
// order();

let isOpen=true;
const order=(time,work)=>{
    return new Promise((resolve,reject)=>{
        if(isOpen){
            setTimeout(()=>{
                resolve(work());
            },time)
        }else{
            reject('cancelled');
        }
    })
}


// order(1000,()=>{console.log('order placed')})
// .then(()=>{
//     return order(3000,()=>{console.log('started preparing')})
// }).then(()=>{
//     return order(1000,()=>{console.log('packaging started')})
// }).catch(err=>{
//     console.log(err);
// })

const doWork=async()=>{
    try {
        await order(1000,()=>{console.log('order placed')})
        await order(3000,()=>{console.log('started preparing')})
        await order(2000,()=>{console.log('in packaging')})
        await order(1000,()=>{console.log('ORDER Dispatched')})
        await order(2000,()=>{console.log('ORDER delivered')})
    } catch (error) {
        console.log(error);
    }
}
doWork();





//quetion 1
// const newer=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('hiii')
//     },1000)
// })

// const promise=[Promise.resolve('hello'),Promise.resolve('world'),newer];

// function ResolveAllPromises(promises){

//     const result=[];
//     let countPromiseCompleted=0;

//     return new Promise((resolve,reject)=>{
//         promises.forEach((promise,i)=>{
//             promise.then((val)=>{
//                 result.push(val);
//                 countPromiseCompleted++;
//                 if(countPromiseCompleted===promises.length){
//                     resolve(result);
//                 }
//             }).catch(reject)
//         })
//     })
// }

// ResolveAllPromises(promise).then((val)=>console.log(val));



// deep equal


// method 1-using the JSON.stringify

// const arr1=[1,2,[3],[4,5,6],[[[7,8,9]]]];
// const arr2=[1,2,[3],[4,5,6],[[[7,8]]]];

// const ar1=[1,2,3];
// const ar2=[1,2,3];

let arr1={a:undefined,b:2};
let arr2={b:2,a:undefined,c:3};
let a1=JSON.stringify(arr1)
let a2=JSON.stringify(arr2)
if(a1===a2){
    console.log('they are deep equal');
}else{
    console.log('they are not equal');
}


// #Method 2 using deep clone check


function deepEqual(obj1,obj2){
    if(typeof obj1===typeof obj2 && typeof obj1!=='object'){
        return obj1===obj2;
    }
    if(typeof obj1!==typeof obj2){
        return false;
    }
    if(!Array.isArray(obj1) && Object.keys(obj1).length!==Object.keys(obj2).length){
        return false;
    }else if(obj1.length!==obj2.length){
        return false;
    }
    
    let ans=true;
    for(let key in obj1){
        ans=ans && deepEqual(obj1[key],obj2[key]);
    }
    return ans;
}

console.log(deepEqual(arr1,arr2));





