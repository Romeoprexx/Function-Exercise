// Part 1

//1. This function takes in two parameters and returns the difference of the two;
function difference(b,c) {
   return b - c; 
}
 
difference(2,2); // 0
difference(0,2); // -2


//2. This function takes in two parameters and returns the product of the two;
function product(b,c) {
    return b * c;
}

product(2,2); // 4
product(0,2); // 0


//3. This function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay(number) {
   let days = {
     1: "Sunday",
     2: "Monday",
     3: "Tuesday",
     4: "Wednesday",
     5: "Thursday",
     6: "Friday",
     7: "Saturday",
   };
   return days[number];
}

printDay(4); // "Wednesday"
printDay(41); // undefined


//4. This function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
arr= [1,2,3,4];
function lastElement(arr) {

    return arr.slice(-1)[0] 
}

arr.slice(-1)[0];


//5. This function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"
function numberCompare(num1,num2) {
  if (num1 == num2) {
     return "Numbers are equal" ;
  } else if (num1 > num2) {
      return "First is greater";
    } else {
      return "Second is greater"
    }
  }
numberCompare(1,1); // "Numbers are equal"
numberCompare(2,1); // "First is greater"
numberCompare(1,2); // "Second is greater"


//6. This function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
function singleLetterCount(str, letter) {
    var letter_count = 0;
      for(var position=0; position< str.length; position++){
      if(str[position].toLowerCase() == letter.toLowerCase()){
        letter_count ++;
       }    
    }
    return letter_count;
}

console.log(singleLetterCount('amazing','A'));// 2
console.log(singleLetterCount('Rithm school','o'));// 2


//Part 2
//1. This function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
function multipleLetterCount(str) {
   let theOutcome = {};
   for (let i = 0; i < str.length; i++) {
    if (!(str[i] in theOutcome)) {
       theOutcome[str[i]] = 1;
    } else {
        theOutcome[str[i]] ++;
      }  
   } 
      return theOutcome;
}

multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}


//2. ArrayManipulation this function should take in at most four parameters (an array, command, location, and value).
function arrayManipulation(array, cmd, location, value) {
   if (cmd === "remove") {
   if (location === "end") {
    return array.pop();    
   }  
    return array.shift();  
   } 
   else if (cmd === "add") {
     if (location === "end") {
      array.push(value);
      return array;   
     }
     array.unshift(value);
      return array;  
   }

}


//2. isPalindrome question
function isPalindrome(str) {
 var re = /[\W_]/g;
 var lowRegStr = str.toLowerCase().replace(re, '');
 var reverseStr = lowRegStr.split('').reverse().join(''); 
 return reverseStr === lowRegStr;
}

isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome('hannah'); // true
isPalindrome('robert'); // false


// Part 3
//1. using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.
function rockPaperScissors() {
    let userChoice = prompt("Do you choose rock, paper or scissors?");
    let computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
let choicesMade = ["rock", "paper", "scissor"];
if(!userChoice || choicesMade.indexOf(userChoice) === -1){
    return "Please select a valid option";
}
if(userChoice === computerChoice) return "It is a Tie!";
if(userChoice === "rock" && computerChoice === "paper") return "You lose haha!, computer picked " +  computerChoice;
if(userChoice === "paper" && computerChoice === "scissor") return "You lose haha!, computer picked " +  computerChoice;
if(userChoice === "scissor" && computerChoice === "rock") return "You lose haha!, computer picked " +  computerChoice;
     return "You win! Computer picked " +  computerChoice;
}


// Alternatively
let userChoice = prompt("Do you choose rock, paper or scissors?");
let computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
let compare=function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins"
        }
        else if(choice2==="paper"){
            return "paper wins";
        }
    }
    else if(choice1==="paper"){
        if(choice2==="scissors"){
            return "scissors win"
        }
        else if(choice2==="rock"){
            return "paper wins";
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="paper"){
            return "scissors win"
        }
        else if(choice2==="rock"){
            return "rock wins";
        }
    }
    
}
console.log(compare(userChoice,computerChoice));