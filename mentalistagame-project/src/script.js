btnStart.addEventListener("click", () => {
  const guessedNumbers = [];
  var numberOfGuesses = 1
  var secretNumber = (parseInt(Math.random() * 1000) + 1);

  do {
    if (numberOfGuesses < 10) {
      var guessNumber = prompt("Guess a number between 1 and 1000.\nYou have " + (11 - numberOfGuesses) + " chances left.");
    }
    else {
      var guessNumber = prompt("Guess a number between 1 and 1000.\nYou have 1 chance left.");
    }
    if (guessNumber == null) {
      break;
    }
    else if (guessNumber == '' || (isNaN(guessNumber)) )  {
      alert("You must insert a number.");
    }
    else if (guessNumber%1 !== 0) {
      alert("You must insert an Integer number");
    }
    else if (guessNumber < 1 || guessNumber > 1000) {
      alert("Number can't be smaller than 1 or bigger than 1000.")
    }
    else if (guessNumber == secretNumber) {
      if (numberOfGuesses == 1) {
        alert("You guessed correctly!\nThe secret number is " + secretNumber + ".\nYou made it in " + numberOfGuesses +" guess.")
      } else {
        alert("You guessed correctly!\nThe secret number is " + secretNumber + ".\nYou made it in " + numberOfGuesses +" guesses.")
      }
    }
    else if (guessNumber >= 1 || guessNumber <= 1000) {
      if (guessNumber > secretNumber) {
        alert("Guess number " + numberOfGuesses + ":\nThe number " + guessNumber + " is bigger than the secret number.");
      }
      else if (guessNumber < secretNumber) {
        alert("Guess number " + numberOfGuesses + ":\nThe number " + guessNumber + " is smaller than the secret number.");
      }
      if (!guessedNumbers.includes(guessNumber)) {
        guessedNumbers.push(guessNumber);
        numberOfGuesses++;
      }
      else if (guessedNumbers.includes(guessNumber)) {
        alert("You have already tried the number " + guessNumber + ", please try a different one.")
      }
      console.log(guessedNumbers);
    }
  } while (guessNumber != secretNumber && numberOfGuesses < 10)
    if (numberOfGuesses == 10 && guessNumber != secretNumber) {
      alert("You made 10 wrong guesses and ran out of chances.\nYou loose!");   
    }
}
);

 

//Work done:

// After I wrote the basic > < == conditionals, prompt and loop, I then implemented the following improvements:

/*   Make the random secret number not include zero (1 to 1000).
  Add a 'start' button instead of prompting after loading page.
  Each time 'start' is pressed it's a new secret number.
  Restrict player prompt imput between 1-1000.
  Restrict to int numbers only.
  Refuse empty input when clicking OK.
  Next loop iteration requires a new number. Store guesses in an array and compare.
  Exit script when clicking Cancel (null => break).
  State the number just guessed.
  Count how many guesses already, but only when it's a number between 1-1000.
  What is the biggest number of guesses you should possibly need if you always guess a number in the middle? It's 10 guesses (2ˆ10 = 1024). Allow only up to 10 guesses or player looses.
  Prompt states how many guesses left until 10th
  CSS: button (center bottom) and logo (center top-%)

To do:
I could have used functions.
 */
