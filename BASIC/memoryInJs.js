//Stack(Primitive) ,Heap(non Primitive)


const userOne={
    email:"a@gmail.com",
    password:"password@123"
}
const userTwo={
    email:"b@gmail.com",
    password:"any@123"
}

userOne.email="hello@gmail.com";
userTwo.email="world@gmail.com";
console.log(userOne.email);
console.log(userOne);
console.log(userTwo.email);

let myName="braja"
let anotherName=myName
anotherName="Mukherjee"
console.log(anotherName);

