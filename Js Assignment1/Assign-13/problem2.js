let inputStr = "Hello World My Name is Mayank Gupta";
let vowels = inputStr.match(/[aeiou]/gi); // Match all vowels (case-insensitive)
let consonants = inputStr.match(/[bcdfghjklmnpqrstvwxyz]/gi); // Match all consonants (case-insensitive)

// Check if vowels and consonants are found
if (vowels === null) {
    vowels = [];
}
if (consonants === null) {
    consonants = [];
}

console.log("Vowels:", vowels.length);       // Output: 3
console.log("Consonants:", consonants.length); // Output: 7
