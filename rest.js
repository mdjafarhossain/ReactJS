// rest operator function
function sumAll(...b){
     console.log(b);
    let tot=0;
    for(const i of b){
        tot +=i;
    }
    return tot;
}

// Task -1 sum with any number of parameters.
let total2=sumAll(1,2,3,4,5);
  console.log(total2);
  console.log(sumAll(1, 2, 3));
  // Expected output: 6
  console.log(sumAll(1, 2, 3, 4));
  // Expected output: 10

  //Task-2 create objects
  function userInfo(firstName,lastName,hobbies){
    const obj={firstName,lastName,hobbies};
    console.log(obj);
  }
  let hobbies=["play","sport","read"];
  userInfo("jafar",'hossain',hobbies);