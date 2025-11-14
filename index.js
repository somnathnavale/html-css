const arr=[2,3,4,7,5];

const val=arr.reduce((acc,curr)=>{
    return acc+=curr*curr;
},0);

console.log(val);

Array.prototype.myReduce=function(cb,initialValue){
    let accumulator=initialValue;
    for(let i=0;i<this.length;i++){
        accumulator=(accumulator===undefined)?this[i]:cb(accumulator,this[i]);
    }
    return accumulator;
}

const val2=arr.myReduce((acc,curr)=>{
    return acc+=curr*curr;
},0);

console.log(val2);