//reverses the odd-numbered words in a string. There is a cleaner way to do this...

function reverseOdd(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 !== 0) {
      arr[i] = arr[i].split("").reverse().join("");
    }
  }
  return arr.join(" ")
}


//converts a number to an array
function numToArray(num) {
  return Array.from(num.toString()).map(Number)
}



//returns the perfect 5th of a music note.
const scale = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G",
  "G#", "Ab", "A", "Bb", "B"
]

function perfectFifths(note) {
  let str = note.toUpperCase();
  return !scale.includes(str) ? "Please enter a valid music note (i.e. 'Eb', 'D', or 'A#')" :
    scale.indexOf(str) <= 5 ? scale[scale.indexOf(str) + 10] :
    scale.indexOf(str) === 6 ? scale[scale.indexOf(str) + 9] :
    scale[scale.indexOf(str) - 7]
}

//makes a string return Cow Latin
function cowLatin(str) {
  return str.replace(/m/g, "moo").replace(/M/g, "Moo");
}

//Recursive countdown--trying to wrap my mind around recursion

function countDown(num) {
  if (num <= 0) {
    console.log('Done!');
    return;
  }
  console.log(num);
  num--;
  return countDown(num);
}

/*Magic 8-ball - probably a mathematical way to solve the problem of the random
number and the replies index...*/



const replies = [
  undefined,
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
]

function magicEightBall(str) {
  if (typeof(str) !== 'string') {
    return "Please ask a question ending with a question mark."
  }
  if (!str.includes("?")) {
    return "Please end your question with a question mark."
  }

  let x = Math.ceil(Math.random() * 20);
  return `${str} Magic 8 Ball says: ${replies[x]}`;
}

/* calcul33t0r = I can't believe I made something that worked! I should rewrite it
so it accepts a string such as "200 + 12.55" instead of the clunky number - string
- number thing happening now... OF NOTE! I finally learned how array.map works! */

const leet = ['o', 'l', 'Z', '℥', '୳', '⑤', 'b', "⅂", "B", "g"];

function calcuLeetor(num1, operator, num2) {

  const makeLeet = num => num.toString().split("").map(x => x === "." ? "." :
    leet[x]).join("");

  let result = 0;

  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    return 'Please enter a valid number.'
  }

  if (typeof(operator) !== 'string') {
    return 'Please enter a valid operator(+, -, /, *).'
  }

    operator === "+" ? result = num1 + num2 :
    operator === "-" ? result = num1 - num2 :
    operator === "*" ? result = num1 * num2 :
    result = num1 / num2;

  return `Boring: ${num1} ${operator} ${num2} = ${result}
  Your l33t calculation = ${makeLeet(num1)} ${operator} ${makeLeet(num2)} = ${makeLeet(result)}`

}



/* writing a function to divide consonants by vowels and then multiply it by
symbols and numbers derived from a string of text.*/

function letterMath(str){

  return `The text you entered: ${str}
  Your text contained ${str.replace(/\s/g, "").match(/[bcdfghjklmnpqrstvwxyz]/gi).length} consonants, ${str.replace(/\s/g, "").match(/[aeiou]/gi).length} vowels, and ${str.replace(/\s/g, "").match(/[^a-z]/gi).length} various other characters.
  Letter Math: (Consonants/Vowels) * Symbols = ${(str.replace(/\s/g, "").match(/[bcdfghjklmnpqrstvwxyz]/gi).length/str.replace(/\s/g, "").match(/[aeiou]/gi).length) * str.replace(/\s/g, "").match(/[^a-z]/gi).length}`

}
