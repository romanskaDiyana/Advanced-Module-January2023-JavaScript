//09. Words Uppercase
//Write a program that extracts all words from a passed-in string and converts them to upper case. 

function solve(words){
    console.log(words.match(/\w+/g).join(", ").toUpperCase());
}

solve('Hi, how are you?');
//output:
//HI, HOW, ARE, YOU
