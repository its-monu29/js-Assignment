let str = "A man, a plan, a canal, Panama";
let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
console.log(cleanedStr === [...cleanedStr].reverse().join('') ? "Palindrome" : "Not a palindrome");

str = "Hello, World!";
cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
console.log(cleanedStr === [...cleanedStr].reverse().join('') ? "Palindrome" : "Not a palindrome");

