// Example correct username and password
var correctUsername = "user123";
var correctPassword = "password123";

// Example entered username and password (you can set these programmatically or get them from user input)
var enteredUsername = "user123";
var enteredPassword = "password123";

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    console.log("Login successful! Welcome, " + enteredUsername + "!");
} else {
    console.log("Incorrect username or password. Please try again.");
}
