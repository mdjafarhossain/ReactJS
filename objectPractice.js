const studentProfile={
    fname:"jafar",
    lname:'hosssani',
    class:{
        name:'Reactjs class',
        teacher:{
            name:'Kumar',
            email:'abc@gmail.com'
        }
    },
    grades:{math:'A',science:'B',eng:'A'}
    
};
const sp=studentProfile;
// dot notation student full name
console.log(`full name ${sp.fname} ${sp.lname}`);
// bracket notation class name
console.log(`class name ${sp.class['name']}`);
//teacher email . and [] notaiton
console.log(`teacher email: ${sp['class'].teacher.email}`);
console.log(`2nd teacher email: ${sp["class"]["teacher"].email}`);
// grades modified
sp.grades.math='B';

console.log(`new grade ${sp.grades.math}`);
