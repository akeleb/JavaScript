const age = 15;
const isOldEnogh = age >= 18;
if (isOldEnogh) {
  console.log("You are old enough to have fun");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You are not an adult! you have ${yearsLeft} year ahead to have fun`
  );
}
/************************* */
let birthYear = 1997;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
let statment = `You are born in the ${century}th century`;
console.log(statment);
/*************************/
const akeleHight = 1.7;
const akeleWeight = 61;
const akele = ((akeleWeight) / (akeleHight ** 2)).toFixed(3);

const getachewHight = 1.8;
const getachewWeight = 63;
const getachew = ((getachewWeight )/ (getachewHight ** 2)).toFixed(3);

if(akele>getachew){
    let akeleBmi = `Akele's BMi(${akele}) is greater than Getachew's BMI(${getachew}!)`
    console.log(akeleBmi);
}else{
    let getachewBmi =  `Getachew's's BMi(${getachew}) is greater than Akele's BMI(${akele}!)`
    console.log(getachewBmi);
}