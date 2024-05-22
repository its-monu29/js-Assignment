let input = "hello";
let output = "";

for (let char of input) {
    // Check if the character is lowercase
    if (char >= 'a' && char <= 'z') {
        // Convert to uppercase by adding the ASCII difference
        output += String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
        // If the character is not lowercase, add it directly to the output
        output += char;
    }
}

console.log(output); // Output: "HELLO"