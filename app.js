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

let array = [];

var r=prompt("are you happy here ? yes/no")
if(r!=="yes" && r!=="no"){
    console.log("invalid")
}
array.push (r)




var x=prompt("are you have a proplem ? yes/no")
if(x!=="yes" && x!=="no"){
    console.log("invalid")
}
array.push (x)



var y=prompt("did you like this page ? yes/no")
if(y!=="yes" && y!=="no"){
    console.log("invalid")
}
array.push (y)
for(let i=0;i<array.length;i++)
{
    console.log(array[i])
}





