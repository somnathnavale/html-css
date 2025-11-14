
// let name="somnath";
// window.name="somnath";

// const obj={
//     name:"vishal",
//     printname:()=>{
//         console.log(this.name);
//     }
// }
// obj.printname();

const arr=[1,[2,3,[4,5,6]],[8,9,[10]]]

const deepcopy=(obj)=>{
    if(typeof obj !=="object" || obj==null){
        return obj;
    }
    const newObject=Array.isArray(obj) ? []:{};
    for(let key in obj){
        let val=obj[key];
        newObject[key]=deepcopy(val);
    }
    return newObject;
}

var a=deepcopy(arr);
console.log(a);

const flatArray=(arr,d=1)=>{
    const result=[];
    arr.forEach(ar=>{
        if(Array.isArray(ar) && d>0){
            result.push(...flatArray(ar,d-1));
        }else{
            result.push(ar);
        }
    })
    return result;
}
console.log(flatArray(arr,2));







const deepcopy1=(arr)=>{
    if(typeof arr!=obj||arr===null) return arr;

    const newObj=Array.isArray(arr) ? []:{};

    for(let i in arr){
        newObj[i]=deepcopy(arr[i]);
    }
    return newObj;
}

