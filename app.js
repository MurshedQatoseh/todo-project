function welcome(name){

    console.log("Hello " +name)



}



var username= prompt("Pleae Enter Your Name");

welcome(username)



var Gender = prompt("Select Your Gender Please");

if(Gender=== "male" || Gender=== "female"){

console.log( Gender)

}

else {

    console.log("Thats A Wrong Gender")

}





var age = prompt("Please Enter Your Age?");

if(age>0){

console.log( "you are "+age+" years old");

}

else {

    console.log("invalid ");

}



var useranswer= confirm("do you want to see the welcoming message");

console.log(useranswer);

if(useranswer== true){

    if(Gender ==="male"){

alert("welcome mr "+username);  }



else if ( Gender ==="female"){

    alert("welcome  mrs " + username);

}



}
var r=confirm("are you happy here ?")
if(r==true){

}else {
    
}