let sentence = "hello world! this is a test.";
let titleCased = sentence.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(titleCased);

// You can test with another sentence
sentence = "another example sentence to test.";
titleCased = sentence.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(titleCased);
