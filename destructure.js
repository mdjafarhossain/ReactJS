// Sample array
const fruits = ["Apple", "Banana", "Cherry"];

// Sample object
const user = {
firstName: "John",
lastName: "Doe",
age: 30,
email: "john.doe@example.com",
address:{street:'Begur-koppa road', city:'DLF Town'}
};

//Task-1 Array destructuring
let [a,b,c]=[...fruits];
console.log(a, c);

//task-2 object destructuring
let {firstName,lastName,email}={...user};

console.log(firstName,lastName,email);

// task-3 nested object destructuring

let {age,address:{street},address:{city},...rest}={...user};
 console.log(age, street,city);
 console.log(rest);

 //task-4 function destructuring
 function funDestructure(user1){
    let {firstName,email}=user1;
    console.log("====destructure function===")
    console.log(firstName);
    console.log(email);
 }

 function funDestructure2({firstName,email ,address:{city}}){
   //let {firstName,email}=user1;
   console.log("====destructure function 2 ===")
   console.log(firstName);
   console.log(email);
   console.log(city);
}

 funDestructure(user);
 funDestructure2(user);