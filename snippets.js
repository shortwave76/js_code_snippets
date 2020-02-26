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
								"G#", "Ab", "A", "Bb", "B"]

function perfectFifths(note){
	let str = note.toUpperCase();
	return !scale.includes(str) ? "Please enter a valid music note (i.e. 'Eb', 'D', or 'A#')"
	: scale.indexOf(str) <= 5 ? scale[scale.indexOf(str)+10]
	: scale.indexOf(str) === 6 ? scale[scale.indexOf(str)+9]
	: scale[scale.indexOf(str)-7]
}

//
