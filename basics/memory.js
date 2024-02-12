// stack (primitive), heap(non-primitive)

let myYoutubename = "craigfaria.com";

let anothername = myYoutubename;
anothername = "chaiorocode";
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "c@gmail.com",
    upi_id: "user@ybl" 
};

let userTwo = userOne

userTwo.email = "craig@gmai.com"

console.log(userOne.email);
console.log(userTwo.email);