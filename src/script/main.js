const message = 'Hello world'; // Try edit me
const title = 'Akele Belay Walelign';
// Update header text
document.querySelector('#header').innerHTML = message;
document.getElementById('title').innerHTML = title;

console.log(message);

variables
let a;
a = 1997;
a = "Akele";
console.log(typeof a);

 MyFunc = () => {
    document.getElementById("bio").innerHTML = "my name is Akele Belay Walelgign"
    console.log("my name is Akele Belay Walelgign")
    let birthYear = 1997
    console.log(birthYear)
    var year=1998
}
MyFunc()
console.log(year)

var age = 100;
  if (age > 12){
    var dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
}
  console.log(dogYears) //it works because var is a function scoped not block scoped

var age = 100;
  if (age > 12){
    let dogYears = age * 7;
    //console.log("You are", dogYears, "dog years old!");
    console.log(`You are ${dogYears} dog years old!`);
}
console.log(dogYears) //err-let is a blockscoped

const hight2 = 1.70
const weight2 = 61

const bmi2 = weight2 / hight2 ** 2

console.log("Your BMI is",'I\'m here',bmi2);

const firstName = "Akele";
const lastName = "Belay";
const job = "Software Engineer";
const yearOfBirth = 1997;
const year = 2023;

//#### Using conatination operator is most of the time tedious work
const akele = "my name is "+firstName + " " + lastName+"\n"+"I am a "+job+"\n"+ "and I am " + (year-yearOfBirth)+" old"
console.log(akele);
//#### we can also use the following to create multi line strings

const myString = "This is \n\
multiple lines \n\
String example \
"
console.log(myString);

//Instead using backtics will be very time saving and less painfull
const newAkele = `My name is ${firstName} ${lastName} 
I am a professional ${job}
I am ${year - yearOfBirth} old`;

console.log(newAkele);

