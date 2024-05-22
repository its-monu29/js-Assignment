var str = "hello";

var reverseStr= "";

for(i=str.length-1; i>=0; i--){
    reverseStr+=str[i]
}
console.log("Input string ->  " + str);
console.log("Reverse string -> "+ reverseStr);