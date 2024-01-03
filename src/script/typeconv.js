// type conversion
// const year = "2022"
// const num_year = parseInt(year)
// const num_year_2 = Number(year)
// console.log(typeof(num_year),typeof(num_year_2));

// const num_year_3 = "m17z"
// console.log(Number(num_year_3),parseInt(num_year_3));

// type coercion

// const num = "10"
// const num2 = "20"
// console.log(num + num2);
// console.log("I am "+ 29 + " years old");
// console.log(num2 - num);
console.log("5"+5+5-55);
console.log(10+"20");
console.log("20"-10);
console.log(+'20'-5);
console.log(+"10"+10);
console.log(-"10"+30);

// play a game which is guess a number between 1 to 10

const guess_num = () => {
  const num3 = 8;
  let guess = prompt("Guess a number between 1 to 10: ");
  if (guess == num3) {
    let message = (document.getElementById("guess").innerHTML =
      "You are correct");
  } else {
    let message = (document.getElementById(
      "guess"
    ).innerHTML = `You are wrong. the number is ${num3}`);
  }
};


const guess_num2 = () => {
    const num3 = 6;
    let guess = prompt("Guess a number between 1 to 10: ");
    if (guess == num3) {
      let message = document.getElementsByClassName("guess")[0];
      message.innerHTML = "You are correct";
    } else {
      let message = document.getElementsByClassName("guess")[0]
      message.innerHTML = `You are wrong. the number is ${num3}`;
    }
  };