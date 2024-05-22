let names = ["Nathan", "John", "Alice", "Nancy", "Bob"];
let count = 0;

for (let name of names) {
    if (name[0] === 'N' || name[0] === 'n') {
        count++;
    }
}

console.log("Number of names starting with 'N' or 'n':", count); // Output: 3
