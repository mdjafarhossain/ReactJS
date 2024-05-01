// Sample array
const fruits = ["Apple", "Banana", "Cherry"];

// Sample object
const user = {
firstName: "John",
lastName: "Doe",
age: 30,
email: "john.doe@example.com",
address:{street:'Begur-koppa road', address:'DLF Town'}
};

let [a,b,c]=[...fruits];
console.log(a, c);

let {firstName,lastName}={...user};

console.log(firstName,lastName);

// nested object destructuring

let {age,address:{street},...rest}={...user};
 console.log(age, street);
 console.log(rest);

 function funDestructure(user1){
    let {firstName,email}=user1;
    console.log("====destructure function===")
    console.log(firstName);
    console.log(email);
 }

 funDestructure(user);