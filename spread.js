//Task-1 spread array
const arr1=[1,2,3];
const arr2=[6,7];

const arrMerge=[...arr1,...arr2];
console.log(arrMerge);

const arrMerge2=[...arr1,5,...arr2,9];
console.log(arrMerge2);

//Task-2 spreadt objecr
const obj1={
    name:"jafar",
    id:'MSI3115',
    profession:'job'
};
const obj2={
    company:"MSI",
    location:"Bengalore",
    country:'india'
};
const objMerge={...obj1, ...obj2, geo:"Asia", country:"UA"};
console.log(objMerge);


// Task-3 spread function

function sum(a,b,c){
    return eval(a+b+c);
}

let numbers=[3,4,5];
let total=sum(...numbers);

console.log(total);

