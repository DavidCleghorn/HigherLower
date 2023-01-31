//initialize the array
let guessArray =[]; 

//Gather high number from user
let input = window.prompt("You must guess the correct number. What is the maximum number you want to use? Please enter a positive number.");

//check for positive integers
while (input < 1 || isNaN(input)) {
    if (input < 1) {
        input = window.prompt("That number is not in range, try again.");
    }
    else {
        input = window.prompt("That is not a number!"); 
    }
}
window.alert("Great! Now choose a number from 1 - " + input);
//randomize the answer
let num = Math.floor(Math.random() * input) + 1;
console.log(num);

//run function
function do_guess() {
    
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");
    
    //output for correct answer
    if(guess == num) {
        message.innerHTML = `You got it! It took you ${guessArray.length + 1} tries and your guesses were ${guessArray.join(', ')}, and ${guess}.`;
    }

    //output if the number is past the maximum N value
    else if (guess > input) {
        message.innerHTML = `That number is not in range, try again. Please enter a number from 1 - ${input}`;
    }

    //output if it is not a positive integer
    else if (guess < 1) {
        message.innerHTML = `That number is not in range, try again. Please enter a number from 1 - ${input}`;
    }

    //output if not a number
    else if (isNaN(guess)) {
        message.innerHTML = `That is not a number! Please enter a number from 1 - ${input}.`;
    }

    //output if number has already been stored in the array
    else if (guessArray.includes(guess)) {
        message.innerHTML = `That has already been guessed. Please choose a different number.`;
    }

    //output if too high and store guess to array
    else if (guess > num) {      
        message.innerHTML = `No, try a lower number.`;
        guessArray.push(guess);
    }
    
    //output if too low and store guess to array
    else {
        message.innerHTML = `No, try a higher number.`;
        guessArray.push(guess);
    }
}